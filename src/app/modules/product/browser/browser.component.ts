import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {


  schemaTable: any = [
    {
      label: 'id',
      property: 'id',
      hidden: true
    },
    {
      label: 'Logo',
      property: 'logo',
      type: 'image'
    },
    {
      label: 'Produc\' name',
      property: 'name',
    },
    {
      label: 'Description',
      property: 'description',
    },
    {
      label: 'Release date',
      property: 'date_release',
      type: 'date'
    },
    {
      label: 'Revision date',
      property: 'date_revision',
      type: 'date'
    }
  ]


  data: any = []
  
    constructor(   private router: Router, private producService: ProductService) {}

    
  ngOnInit(): void {
    this.producService.getAll().subscribe(response => {
      console.log('response', response)
      this.data = response;
    })
  }
    handleEvent(event: any) {
      console.log('handleEvent', event)
      if(event == 'new') {
        this.router.navigate(['/product/new'])
      }
    }
}
