<?php

use Illuminate\Database\Seeder;

class EntriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('entries')->insert([
            ['data' => '[{\"id\": 1, \"value\": \"Tre\"}, {\"id\": 4, \"value\": \"111\"}, {\"id\": 3, \"value\": \"dddee\"}, {\"id\": 5, \"value\": [\"vrouw\"]}, {\"id\": 7, \"value\": []}, {\"id\": 12, \"value\": true}, {\"id\": 13}]', 'layout' => 1, 'status' => 'accepted'],
            ['data' => '[{\"id\": 3, \"value\": \"ddfeafa\"}, {\"id\": 5, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 4, \"value\": \"efafae\"}, {\"id\": 7, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 12, \"value\": true}, {\"id\": 13}]', 'layout' => 1, 'status' => 'pending'],
            ['data' => '[{\"id\": 3, \"value\": \"ii\"}, {\"id\": 5, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 4, \"value\": \"ii\"}, {\"id\": 7, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 12, \"value\": true}, {\"id\": 13}]', 'layout' => 1, 'status' => 'pending'],
            ['data' => '[{\"id\": 3, \"value\": \"eaeffae\"}, {\"id\": 5, \"value\": [\"vrouw\", \"3\"]}, {\"id\": 4, \"value\": \"efeafeaf\"}, {\"id\": 7, \"value\": [\"vrouw\", \"3\"]}, {\"id\": 12, \"value\": false}, {\"id\": 13}]', 'layout' => 1, 'status' => 'pending'],
            ['data' => '[{\"id\": 3, \"value\": \"eaeffae\"}, {\"id\": 5, \"value\": [\"vrouw\", \"3\"]}, {\"id\": 4, \"value\": \"efeafeaf\"}, {\"id\": 7, \"value\": [\"vrouw\", \"3\"]}, {\"id\": 12, \"value\": false}, {\"id\": 13}]', 'layout' => 1, 'status' => 'pending']
        ]);
    }
}
