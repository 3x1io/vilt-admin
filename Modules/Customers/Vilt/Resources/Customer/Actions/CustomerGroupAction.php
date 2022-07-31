<?php

namespace Modules\Customers\Vilt\Resources\Customer\Actions;

use Modules\Base\Helpers\Resources\Base\Actions;

class CustomerGroupAction extends Actions
{
    public function setup(): void
    {
        $this->name('customer-group');
        $this->label(__('Customer Group'));
        $this->type('success');
        $this->icon('bx bx-user');
        $this->modal('group');
    }
}
