<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{


    public function parent()
    {
        return $this->hasOne('App\Category');
    }
    // public function initiatives()
    // {
    //     return $this->belongsToMany('App\Initiative');
    // }
    public function organisations()
    {
        return $this->belongsToMany('App\Organisation');
    }
    public function entries()
    {
        return $this->belongsToMany('App\Entry');
    }

}
