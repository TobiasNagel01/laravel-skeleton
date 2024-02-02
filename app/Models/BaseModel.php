<?php

namespace App\Models;

use App\Traits\HasNamedPrimaryKey;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class BaseModel
 * @package App\Models
 */
class BaseModel extends Model
{
    use HasNamedPrimaryKey,
        HasUuids,
        SoftDeletes;

    /**
     * @return string
     */
    public function __toString(): string
    {
        return json_encode($this->attributes);
    }
}
