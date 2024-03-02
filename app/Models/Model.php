<?php
/*
 * @author: Rio
 * @Date: 2024-01-29 21:43:39
 */

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Builder;

/**
 * App\Models\Model
 *
 * @method static Builder|Model newModelQuery()
 * @method static Builder|Model newQuery()
 * @method static Builder|Model query()
 * @mixin \Eloquent
 */
class Model extends \Illuminate\Database\Eloquent\Model
{

    protected $guarded = [];

    protected $connection = 'mysql';

    /**
     * @var string 统一使用时间戳
     */
    // protected $dateFormat = 'U';

    /**
     * @param DateTimeInterface $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date): string
    {
        return $date->format('Y-m-d H:i:s');
    }
}
