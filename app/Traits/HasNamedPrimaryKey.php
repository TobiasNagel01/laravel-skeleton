<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait HasNamedPrimaryKey
{
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        //Replace primaryKeyName = (classname)_id
        $this->primaryKey = Str::snake(class_basename(static::class)) . '_id';
    }
}
