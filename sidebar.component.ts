import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, MenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Profile', icon: 'pi pi-user' },
      { label: 'Messages', icon: 'pi pi-envelope' },
      { label: 'Settings', icon: 'pi pi-cog' },
      { label: 'Logout', icon: 'pi pi-sign-out' }
    ];
  }  
}
