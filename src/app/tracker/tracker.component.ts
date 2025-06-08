import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

import { NgStyle } from '@angular/common';

import { ChartComponent } from '../chart/chart.component';
import dataDE from '../../data/task-DE.json'
import { AllTask } from './tracker.model';
import { LangService } from '../../service/lang.service';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [ChartComponent, NgStyle],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {

  protected id: number = 0

  protected type: number = 0
  public mouseX: number = 0;
  public mouseY: number = 0;

  public isHovering = false;

  @ViewChild('trackArea') trackArea!: ElementRef;


  constructor(public langService: LangService) {
  }

  ngOnInit() {

  }

  protected setType(type: number) {
    this.type = type
  }


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isHovering) return;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
  
  mouseEnter(id: number) {
    this.isHovering = true;
    this.id = id -  1
  }

  mouseLeave() {
    this.isHovering = false;
    console.log("leafe")
  }


}
