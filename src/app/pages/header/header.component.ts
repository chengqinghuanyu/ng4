import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  styles: [`
  .centered-text {
    text-align: center;
  }
  
  .underlined {
    border-bottom: 1px solid #ccc;
  }
  
  .orange {
    color: orange;
  }

  .card {
    border: 1px solid #eee;
    padding: 1rem;
    margin: 0.4rem;
    font-family: sans-serif;
    box-shadow: 2px 2px 2px #888888;
  }

  .dark {
    background-color: #444;
    border-color: #000;
    color: #fff;
  }

  .flat {
    box-shadow: none;
  }
`]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  backStyle:string="#eee";
  myStyle = { 
          color: 'red',
          'font-weight': 'bold',
          background: this.backStyle
        }
        good="";
        flat: boolean = true;

}
