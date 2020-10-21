import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public clientName= 'ACME Fast Food - Manchester';
  public currentBuildingOccupancy=101;
  public  totalVisitsToday=1200;
  public  maximumBuildingOccupancy=150;
  public  buildingOccupancyRatio=this.currentBuildingOccupancy/this.maximumBuildingOccupancy;
  public  waitTime = 0;
  //(this.buildingOccupancyRatio>=1)? 2 : 0;
  private clikedCounter=0;
  public showSettingsForm:boolean=false;
  constructor() {}

  buttonClikedCounter(){
    
   
    this.clikedCounter=this.clikedCounter+1;
    if(this.clikedCounter>4)
    {
      this.showSettingsForm=true;
      this.clikedCounter=0;
    }
  }
  hideForm()
  {
    this.showSettingsForm=false;
  }

}
