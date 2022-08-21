<?php

namespace Modules\Base\Services\Rows;

use Modules\Base\Services\Concerns\HasDefault;
use Modules\Base\Services\Concerns\HasHint;
use Modules\Base\Services\Concerns\HasLabel;
use Modules\Base\Services\Concerns\HasMax;
use Modules\Base\Services\Concerns\HasMin;
use Modules\Base\Services\Concerns\HasName;
use Modules\Base\Services\Concerns\HasPlaceholder;
use Modules\Base\Services\Concerns\HasRoles;
use Modules\Base\Services\Concerns\HasStep;
use Modules\Base\Services\Concerns\HasTab;
use Modules\Base\Services\Concerns\HasType;
use Modules\Base\Services\Concerns\IsDisabled;
use Modules\Base\Services\Concerns\IsReactive;
use Modules\Base\Services\Concerns\IsRequired;
use Modules\Base\Services\Concerns\IsSearchable;
use Modules\Base\Services\Concerns\IsSortable;
use Modules\Base\Services\Concerns\IsUnique;

class Number
{
    use HasName;
    use HasLabel;
    use HasDefault;
    use HasRoles;
    use HasPlaceholder;
    use HasHint;
    use HasTab;
    use HasType;
    use HasMax;
    use HasMin;
    use HasStep;
    use IsDisabled;
    use IsRequired;
    use IsUnique;
    use IsReactive;
    use IsSearchable;
    use IsSortable;

    public string $vue = 'ViltNumber.vue';

    /**
     * @param string $name
     * @return static
     */
    public static function make(string $name): self
    {
        return (new self)->name($name);
    }
}
