<?php

namespace Modules\Base\Supports;

use Exception;
use JsonSerializable;
use ReflectionClass;
use ReflectionException;

abstract class Enum implements JsonSerializable
{
    protected static $cache = [];

    protected $value;

    public function __construct($value)
    {
        if ($value instanceof static) {
            $this->value = $value->getValue();
            return;
        }

        $this->value = $value;
    }

    public function getValue()
    {
        return $this->value;
    }

    /**
     * Returns the names (keys) of all constants in the Enum class
     *
     * @return array
     */
    public static function keys()
    {
        return array_keys(static::toArray());
    }

    public static function toArray(bool $includeDefault = false): array
    {
        $class = get_called_class();
        if (!isset(static::$cache[$class])) {
            try {
                $reflection = new ReflectionClass($class);
            } catch (ReflectionException $error) {
                info($error->getMessage());
            }
            static::$cache[$class] = $reflection->getConstants();
        }

        $result = static::$cache[$class];

        if (isset($result['__default']) && !$includeDefault) {
            unset($result['__default']);
        }

        return $result;
    }

    /**
     * Returns instances of the Enum class of all Enum constants
     *
     * @return static[] Constant name in key, Enum instance in value
     */
    public static function values()
    {
        $values = [];

        foreach (static::toArray() as $key => $value) {
            $values[$key] = new static($value);
        }

        return $values;
    }


    /**
     * Returns a value when called statically like so: MyEnum::SOME_VALUE() given SOME_VALUE is a class constant
     *
     * @param string $name
     * @param array $arguments
     *
     * @return static
     * @throws Exception
     */
    public static function __callStatic($name, $arguments)
    {
        $array = static::toArray();
        if (isset($array[$name]) || array_key_exists($name, $array)) {
            return new static($array[$name]);
        }

        throw new Exception('No static method or enum constant ' . $name . ' in class ' . get_called_class());
    }


    public static function isValid($value)
    {
        return in_array($value, static::toArray(), true);
    }



    public static function labels(): array
    {
        $result = [];

        $i = 0;
        foreach (static::toArray() as  $key => $value) {
            $result[$i]['id'] = $value;
            $result[$i]['name'] = ucfirst(strtolower(__($key)));
            $i++;
        }

        return $result;
    }

    public static function getLabel(?string $value): ?string
    {

    }


    /**
     * Returns the enum key (i.e. the constant name).
     *
     * @return mixed
     */
    public function getKey()
    {
        return static::search($this->value);
    }


    /**
     * Return key for value
     *
     * @param string|int $value
     *
     * @return mixed
     */
    public static function search($value)
    {
        return array_search($value, static::toArray(), true);
    }


    /**
     * @return string
     */
    public function __toString()
    {
        return (string)$this->value;
    }


    /**
     * Compares one Enum with another.
     *
     * @param Enum|null $enum
     * @return bool True if Enums are equal, false if not equal
     */
    final public function equals(Enum $enum = null)
    {
        return $enum !== null && $this->getValue() === $enum->getValue() && get_called_class() === get_class($enum);
    }

    /**
     * Specify data which should be serialized to JSON. This method returns data that can be serialized by json_encode()
     * natively.
     *
     * @return mixed
     * @link http://php.net/manual/en/jsonserializable.jsonserialize.php
     */
    public function jsonSerialize()
    {
        return $this->getValue();
    }


    public function label(): ?string
    {
        return self::getLabel($this->getValue());
    }
}
