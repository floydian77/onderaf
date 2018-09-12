<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    public function layout()
    {
        return $this->belongsTo('App\Layout');
    }
    // public function initiative()
    // {
    //     return $this->belongsTo('App\Initiative');
    // }
    // public function categoriesIds()
    // {
    //     // return $this->belongsToMany('App\Category')->lists('id');
    //     // return $this->belongsToMany('App\Category');
    //     return $this->categories->get()->pluck('id');
    // }
    public function categories()
    {
        // return $this->belongsToMany('App\Category')->lists('id');
        return $this->belongsToMany('App\Category');
    }
}
