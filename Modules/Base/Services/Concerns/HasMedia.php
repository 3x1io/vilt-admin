<?php

namespace Modules\Base\Services\Concerns;

trait HasMedia
{
    /**
     * @var ?string
     * @example 12
     */
    public ?string $media = null;

    public function media($media): static
    {
        $this->media = $media;
        return $this;
    }
}
