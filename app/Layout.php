<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Layout extends Model
{
    //
    // protected $primaryKey = 'name';
    // public $incrementing = false;

    public function entries()
    {
        return $this->hasMany('App\Entry');
    }

}
