import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WeatherService } from "../../services/weather/weather.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit, OnDestroy {
  city: string;
  state: string;
  temp: number;
  hum: number;
  wind: number;

  today: string;

  day1NAme: string;
  day1State: string;
  day1Temp: string;

  day2NAme: string;
  day2State: string;
  day2Temp: string;

  day3NAme: string;
  day3State: string;
  day3Temp: string;

  day4NAme: string;
  day4State: string;
  day4Temp: string;

  day5NAme: string;
  day5State: string;
  day5Temp: string;

  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  sub4: Subscription;
  sub5: Subscription;

  constructor(public activeRouter: ActivatedRoute, public weather: WeatherService) {
  }

  ngOnInit() {
    const todayNumberInWeek = new Date().getDay();
  }
}
