<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Initiative extends Model
{


    public function categories()
    {
        return $this->hasMany('App\Category');
    }
    // todo more than one?
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
