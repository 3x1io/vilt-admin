<?php

namespace Modules\Base\Services\Concerns;

trait HasRoles
{
    /**
     * @var ?bool
     * @example true
     */
    public ?bool $view = true;

    /**
     * @var ?bool
     * @example true
     */
    public ?bool $edit = true;

    /**
     * @var ?bool
     * @example true
     */
    public ?bool $create = true;

    /**
     * @var ?bool
     * @example true
     */
    public ?bool $list = true;

    /**
     * @param bool $view
     * @return $this
     */
    public function view(bool $view): static
    {
        $this->view = $view;
        return $this;
    }

    /**
     * @param bool $create
     * @return $this
     */
    public function create(bool $create): static
    {
        $this->create = $create;
        return $this;
    }

    /**
     * @param bool $edit
     * @return $this
     */
    public function edit(bool $edit): static
    {
        $this->edit = $edit;
        return $this;
    }

    /**
     * @param bool $list
     * @return $this
     */
    public function list(bool $list): static
    {
        $this->list = $list;
        return $this;
    }
}
