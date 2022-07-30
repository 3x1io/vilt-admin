<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;



class Row
{
    use Configure;

    /**
     * @var string
     */
    private $label = "text";
    /**
     * @var string|null
     */
    private ?string $field = "text";
    /**
     * @var string|null
     */
    private ?string $type = "text";
    /**
     * @var string|null
     */
    private ?string $track_by_name = "name";
    /**
     * @var string|null
     */
    private ?string $track_by_id = "id";
    /**
     * @var array|null
     */
    private ?array $options = [];
    /**
     * @var bool|null
     */
    private ?bool $multi = false;
    /**
     * @var bool|null
     */
    private ?bool $sorting = true;
    /**
     * @var bool|null
     */
    private ?bool $create = true;
    /**
     * @var bool|null
     */
    private ?bool $edit = true;
    /**
     * @var bool|null
     */
    private ?bool $view = true;
    /**
     * @var bool|null
     */
    private ?bool $list = true;
    /**
     * @var bool
     */
    private $reactive = false;
    /**
     * @var string|null
     */
    private ?string $disabled = null;
    /**
     * @var string|null
     */
    private ?string $row = null;
    /**
     * @var string|null
     */
    private ?string $placeholder = null;
    /**
     * @var string|null
     */
    private ?string $className = null;
    /**
     * @var string|null
     */
    private ?string $hint = null;
    /**
     * @var string|null
     */
    private ?string $model = null;
    /**
     * @var string|null
     */
    private ?string $relation = null;
    /**
     * @var null
     */
    private $validation = null;
    /**
     * @var bool|null
     */
    private ?bool $preview = false;
    /**
     * @var bool|null
     */
    private ?bool $url = false;
    /**
     * @var bool|null
     */
    private ?bool $over = false;
    /**
     * @var null
     */
    private  $default = null;
    /**
     * @var bool|null
     */
    private ?bool $search = false;
    /**
     * @var bool|null
     */
    private ?bool $unique = false;

    /**
     * @var string|null
     */
    private ?string $tab = null;

    /**
     * @param $field
     */
    public function __construct($field)
    {
        $this->field = $field;
    }

    /**
     * @param string $field
     * @return \Illuminate\Contracts\Foundation\Application|mixed
     */
    public static function make(string $field)
    {
        $static = app(static::class, ['field' => $field]);
        $static->setUp();

        return $static;
    }

    /**
     * @param $default
     * @return $this|null
     */
    public function default($default): ?static
    {
        $this->default = $default;
        return $this;
    }

    /**
     * @param $tab
     * @return $this|null
     */
    public function tab($tab): ?static
    {
        $this->tab = $tab;
        return $this;
    }

    /**
     * @param $url
     * @return $this|null
     */
    public function url($url): ?static
    {
        $this->url = $url;
        return $this;
    }

    /**
     * @param $relation
     * @return $this|null
     */
    public function relation($relation): ?static
    {
        $this->relation = $relation;
        return $this;
    }

    /**
     * @param $hint
     * @return $this|null
     */
    public function hint($hint): ?static
    {
        $this->hint = $hint;
        return $this;
    }

    /**
     * @param $className
     * @return $this|null
     */
    public function className($className): ?static
    {
        $this->className = $className;
        return $this;
    }

    /**
     * @param $placeholder
     * @return $this|null
     */
    public function placeholder($placeholder): ?static
    {
        $this->placeholder = $placeholder;
        return $this;
    }

    /**
     * @param $preview
     * @return $this|null
     */
    public function preview($preview): ?static
    {
        $this->preview = $preview;
        return $this;
    }

    /**
     * @param $disabled
     * @return $this|null
     */
    public function disabled($disabled): ?static
    {
        $this->disabled = $disabled;
        return $this;
    }

    /**
     * @param $row
     * @return $this|null
     */
    public function row($row): ?static
    {
        $this->row = $row;
        return $this;
    }

    /**
     * @param $validation
     * @return $this|null
     */
    public function validation($validation): ?static
    {
        $this->validation = $validation;
        return $this;
    }

    /**
     * @param $reactive
     * @return $this|null
     */
    public function reactive($reactive): ?static
    {
        $this->reactive = $reactive;
        return $this;
    }

    /**
     * @param $search
     * @return $this|null
     */
    public function search($search): ?static
    {
        $this->search = $search;
        return $this;
    }

    /**
     * @param $model
     * @return $this|null
     */
    public function model($model): ?static
    {
        $this->model = $model;
        return $this;
    }

    /**
     * @param $multi
     * @return $this|null
     */
    public function multi($multi): ?static
    {
        $this->multi = $multi;
        return $this;
    }

    /**
     * @param $options
     * @return $this|null
     */
    public function options($options): ?static
    {
        $this->options = $options;
        return $this;
    }

    /**
     * @param $track_by_id
     * @return $this|null
     */
    public function track_by_id($track_by_id): ?static
    {
        $this->track_by_id = $track_by_id;
        return $this;
    }

    /**
     * @param $track_by_name
     * @return $this|null
     */
    public function track_by_name($track_by_name): ?static
    {
        $this->track_by_name = $track_by_name;
        return $this;
    }

    /**
     * @param $unique
     * @return $this|null
     */
    public function unique($unique): ?static
    {
        $this->unique = $unique;
        return $this;
    }

    /**
     * @param $label
     * @return $this|null
     */
    public function label($label): ?static
    {
        $this->label = $label;
        return $this;
    }

    /**
     * @param $field
     * @return $this|null
     */
    public function field($field): ?static
    {
        $this->field = $field;
        return $this;
    }

    /**
     * @param $type
     * @return $this|null
     */
    public function type($type): ?static
    {
        $this->type = $type;
        return $this;
    }

    /**
     * @param $sorting
     * @return $this|null
     */
    public function sorting($sorting): ?static
    {
        $this->sorting = $sorting;
        return $this;
    }

    /**
     * @param $create
     * @return $this|null
     */
    public function create($create): ?static
    {
        $this->create = $create;
        return $this;
    }

    /**
     * @param $edit
     * @return $this|null
     */
    public function edit($edit): ?static
    {
        $this->edit = $edit;
        return $this;
    }

    /**
     * @param $view
     * @return $this|null
     */
    public function view($view): ?static
    {
        $this->view = $view;
        return $this;
    }

    /**
     * @param $list
     * @return $this|null
     */
    public function list($list): ?static
    {
        $this->list = $list;
        return $this;
    }

    /**
     * @param $over
     * @return $this|null
     */
    public function over($over): ?static
    {
        $this->over = $over;
        return $this;
    }

    /**
     * @return array
     */
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
            "hint" => $this->hint,
            "model" => $this->model,
            "relation" => $this->relation,
            "tab" => $this->tab,
        ];
    }
}
