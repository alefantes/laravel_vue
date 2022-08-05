<?php

namespace App\Http\Controllers;

class PersonController extends Controller
{
    public function __invoke()
    {
        return [
              [
                  'id'=>1,
                  'name'=> 'Vasya',
                  'age'=> 20,
                  'job'=> 'coach'
              ],
              [
                  'id'=>2,
                  'name'=> 'Elena',
                  'age'=> 17,
                  'job'=> 'rest'
              ],
              [
                  'id'=>3,
                  'name'=> 'Petr',
                  'age'=> 34,
                  'job'=> 'seller'
              ],
              [
                  'id'=>4,
                  'name'=> 'Ksusha',
                  'age'=> 25,
                  'job'=> 'traveler'
              ],
              [
                  'id'=>5,
                  'name'=> 'Olya',
                  'age'=> 21,
                  'job'=> 'teacher'
              ],
        ];
    }
}
