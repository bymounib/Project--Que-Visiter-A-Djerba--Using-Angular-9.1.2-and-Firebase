import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';

import {CrudService} from '../../shared/services/crud.service';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  
  comment: any;
  commentaire:string;
  UserName:string;
  id_article:number;
  Photo: string;

  message:string;
  constructor(public crudservice:CrudService,public authService: AuthService,
    public router: Router,
    public ngZone: NgZone){}

  ngOnInit() {
    this.crudservice.get_Allcommentaire().subscribe(data => {

      this.comment = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          id_article: e.payload.doc.data()['id_article'],
          UserName: e.payload.doc.data()['UserName'],
          Photo: e.payload.doc.data()['Photo'],
          commentaire: e.payload.doc.data()['commentaire'],
         
        };
      })
      console.log(this.commentaire);

    });
  }
  
  CreateRecord()
  {
    let Record = {};
    Record['id_article'] = 0;
    Record['UserName'] = this.authService.userData.displayName;
    Record['Photo'] = this.authService.userData.photoURL;
    Record['commentaire'] = this.commentaire;
    

    this.crudservice.create_Newcommentaire(Record).then(res => {

        this.commentaire = "";
        this.UserName = "";

        console.log(res);
        this.message = "commentaire data save Done";
    }).catch(error => {
      console.log(error);
    });
    
  }



  CreateRecord1()
  {
    let Record = {};
    Record['id_article'] = 1;
    Record['UserName'] = this.authService.userData.displayName;
    Record['Photo'] = this.authService.userData.photoURL;
    Record['commentaire'] = this.commentaire;
    

    this.crudservice.create_Newcommentaire(Record).then(res => {

        this.commentaire = "";
        this.UserName = "";

        console.log(res);
    }).catch(error => {
      console.log(error);
    });
    
  }

  CreateRecord2()
  {
    let Record = {};
    Record['id_article'] = 2;
    Record['UserName'] = this.authService.userData.displayName;
    Record['Photo'] = this.authService.userData.photoURL;
    Record['commentaire'] = this.commentaire;
    

    this.crudservice.create_Newcommentaire(Record).then(res => {

        this.commentaire = "";
        this.UserName = "";

        console.log(res);
    }).catch(error => {
      console.log(error);
    });
    
  }

  CreateRecord3()
  {
    let Record = {};
    Record['id_article'] = 3;
    Record['UserName'] = this.authService.userData.displayName;
    Record['Photo'] = this.authService.userData.photoURL;
    Record['commentaire'] = this.commentaire;
    

    this.crudservice.create_Newcommentaire(Record).then(res => {

        this.commentaire = "";
        this.UserName = "";

        console.log(res);
    }).catch(error => {
      console.log(error);
    });
    
  }

  CreateRecord4()
  {
    let Record = {};
    Record['id_article'] = 4;
    Record['UserName'] = this.authService.userData.displayName;
    Record['Photo'] = this.authService.userData.photoURL;
    Record['commentaire'] = this.commentaire;
    

    this.crudservice.create_Newcommentaire(Record).then(res => {

        this.commentaire = "";
        this.UserName = "";

        console.log(res);
    }).catch(error => {
      console.log(error);
    });
    
  }

  CreateRecord5()
  {
    let Record = {};
    Record['id_article'] = 5;
    Record['UserName'] = this.authService.userData.displayName;
    Record['Photo'] = this.authService.userData.photoURL;
    Record['commentaire'] = this.commentaire;
    

    this.crudservice.create_Newcommentaire(Record).then(res => {

        this.commentaire = "";
        this.UserName = "";

        console.log(res);
    }).catch(error => {
      console.log(error);
    });
    
  }

}


  

