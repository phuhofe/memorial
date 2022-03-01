import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {AdminState, SaveConfig} from '../store/admin.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  currentTheme: number;
  mainColor: string;
  bannerURL: string;

  themeArray = [
    'newGeneration',
    'netNotice'
  ];

  demoBannerURL = [
    'https://davekochphoto.com/wp-content/uploads/2018/05/8103540-Edit.jpg',
    'https://i.pinimg.com/originals/30/fb/21/30fb21d49cf3982df233ce432a7c0a44.jpg',
    'https://i.pinimg.com/originals/ff/fc/b1/fffcb1f5b8a707aebec19f0a57cefb01.jpg',
  ];

  config$: Observable<{
    config: {
      mainColor: string,
      themeId: number,
      bannerURL: string
    }
  }>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.config$ = this.store.select(AdminState);
    this.config$.subscribe((data) => {
      if (data) {
        this.currentTheme = data.config.themeId;
        this.mainColor = data.config.mainColor;
        this.bannerURL = data.config.bannerURL;
      }
    });
  }

  previousTheme(): void {
    if (this.currentTheme === 0) {
      return;
    }

    this.currentTheme -= 1;
  }

  nextTheme(): void {
    if (this.currentTheme === 2) {
      return;
    }

    this.currentTheme += 1;
  }

  onSave(): void {
    this.store.dispatch(new SaveConfig({
      themeId: this.currentTheme,
      mainColor: this.mainColor,
      bannerURL: this.bannerURL
    }));
  }

  copyLink(url: string): void {
    this.bannerURL = url;
  }

}
