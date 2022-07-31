<?php

namespace Modules\Customers\Vilt\Resources\Customer\Modals;

use Modules\Base\Helpers\Resources\Action;
use Modules\Base\Helpers\Resources\Base\Modals;
use Modules\Base\Helpers\Resources\Row;

class CustomerGroupModal extends Modals
{
    public function setup(): void
    {
        $this->name('group');
        $this->title(__('Attach Customer Group'));
        $this->rows([
           Row::make('Name')->get()
        ]);
        $this->buttons([
           Action::make('save')->label(__('Save'))->action('customers.group')->render()
        ]);
    }
}
