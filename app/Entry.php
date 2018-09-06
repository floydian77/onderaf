<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    public function layout()
    {
        return $this->belongsTo('App\Layout');
    }
    public function initiative()
    {
        return $this->belongsTo('App\Initiative');
    }
}
