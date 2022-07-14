<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;



class Row
{
    use Configure;

    private $label = "text";
    private ?string $field = "text";
    private ?string $type = "text";
    private ?string $track_by_name = "name";
    private ?string $track_by_id = "id";
    private ?array $options = [];
    private ?bool $multi = false;
    private ?bool $sorting = true;
    private ?bool $create = true;
    private ?bool $edit = true;
    private ?bool $view = true;
    private ?bool $list = true;
    private $reactive = false;
    private ?string $disabled = null;
    private ?string $row = null;
    private ?string $placeholder = null;
    private ?string $className = null;
    private ?string $validation = null;
    private ?bool $preview = false;
    private ?bool $url = false;
    private ?bool $over = false;
    private  $default = null;
    private ?bool $search = false;
    private ?bool $unique = false;

    public function __construct($field)
    {
        $this->field = $field;
    }

    public static function make(string $field)
    {
        $static = app(static::class, ['field' => $field]);
        $static->setUp();

        return $static;
    }

    public function default($default): ?static
    {
        $this->default = $default;
        return $this;
    }

    public function url($url): ?static
    {
        $this->url = $url;
        return $this;
    }

    public function className($className): ?static
    {
        $this->className = $className;
        return $this;
    }

    public function placeholder($placeholder): ?static
    {
        $this->placeholder = $placeholder;
        return $this;
    }

    public function preview($preview): ?static
    {
        $this->preview = $preview;
        return $this;
    }

    public function disabled($disabled): ?static
    {
        $this->disabled = $disabled;
        return $this;
    }

    public function row($row): ?static
    {
        $this->row = $row;
        return $this;
    }

    public function validation($validation): ?static
    {
        $this->validation = $validation;
        return $this;
    }

    public function reactive($reactive): ?static
    {
        $this->reactive = $reactive;
        return $this;
    }

    public function search($search): ?static
    {
        $this->search = $search;
        return $this;
    }

    public function multi($multi): ?static
    {
        $this->multi = $multi;
        return $this;
    }

    public function options($options): ?static
    {
        $this->options = $options;
        return $this;
    }

    public function track_by_id($track_by_id): ?static
    {
        $this->track_by_id = $track_by_id;
        return $this;
    }

    public function track_by_name($track_by_name): ?static
    {
        $this->track_by_name = $track_by_name;
        return $this;
    }

    public function unique($unique): ?static
    {
        $this->unique = $unique;
        return $this;
    }

    public function label($label): ?static
    {
        $this->label = $label;
        return $this;
    }

    public function field($field): ?static
    {
        $this->field = $field;
        return $this;
    }

    public function type($type): ?static
    {
        $this->type = $type;
        return $this;
    }

    public function sorting($sorting): ?static
    {
        $this->sorting = $sorting;
        return $this;
    }

    public function create($create): ?static
    {
        $this->create = $create;
        return $this;
    }

    public function edit($edit): ?static
    {
        $this->edit = $edit;
        return $this;
    }

    public function view($view): ?static
    {
        $this->view = $view;
        return $this;
    }

    public function list($list): ?static
    {
        $this->list = $list;
        return $this;
    }

    public function over($over): ?static
    {
        $this->over = $over;
        return $this;
    }

    public function get(): array
    {
        return [
            "label" => $this->label,
            "field" => $this->field,
            "type" => $this->type,
            "track_by_name" => $this->track_by_name,
            "track_by_id" => $this->track_by_id,
            "options" => $this->options,
            "multi" => $this->multi,
            "sorting" => $this->sorting,
            "create" => $this->create,
            "edit" => $this->edit,
            "view" => $this->view,
            "list" => $this->list,
            "reactive" => $this->reactive,
            "row" => $this->row,
            "disabled" => $this->disabled,
            "placeholder" => $this->placeholder,
            "className" => $this->className,
            "preview" => $this->preview,
            "url" => $this->url,
            "default" => $this->default,
            "over" => $this->over,
            "search" => $this->search,
            "validation" => $this->validation,
            "unique" => $this->unique,
        ];
    }
}
