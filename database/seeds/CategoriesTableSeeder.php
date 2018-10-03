<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            ['name' => 'Groen'],
            ['name' => 'Verkeer'],
            ['name' => 'Sociaal'],
            ['name' => 'Motorvoertuigen & automaten'],
            ['name' => 'Sport']
        ]);
    }
}
