import { Component, OnInit } from '@angular/core';
import { IVideo } from '../../models/ivideo'

@Component({
  selector: 'app-show-videos',
  templateUrl: './show-videos.component.html',
  styleUrls: ['./show-videos.component.css']
})
export class ShowVideosComponent implements OnInit {

  public titulo = 'titulo 2'

  public videos: Array<IVideo> = [
    {
      name: 'video1',
      description: 'MKXMAKSMXLK XASKMXLASXNo,;wmc',
      genres: ['g1'],
      price: 10,
      forRent: 5
    },
    {
      name: 'video2',
      description: 'MKXMAKSMXLK XASKMXLASXNo,;wmc',
      genres: ['g1'],
      price: 10,
      forRent: 5
    },
    {
      name: 'video3',
      description: 'MKXMAKSMXLK XASKMXLASXNo,;wmc',
      genres: ['g1'],
      price: 10,
      forRent: 5
    },
    {
      name: 'video4',
      description: 'MKXMAKSMXLK XASKMXLASXNo,;wmc',
      genres: ['g1'],
      price: 10,
      forRent: 5
    },
    // {
    //   name: 'video5',
    //   description: 'MKXMAKSMXLK XASKMXLASXNo,;wmc',
    //   genres: ['g1'],
    //   price: 10,
    //   forRent: 5
    // },
  ]

  constructor() {
    console.log('Constructor')
  }

  ngOnInit(): void {
    console.log('Init')
  }

}
