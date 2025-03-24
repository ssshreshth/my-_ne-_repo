import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { WindowMaximizeIcon } from 'primeng/icons/windowmaximize';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonModule, MenuModule,RippleModule,WindowMaximizeIcon,ToastModule,Dialog,InputTextModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [MessageService]
})
export class NavbarComponent {
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    closeDialog() {
        this.visible = false;
    }


  profileMenuItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user' },
    { label: 'Change Password', icon: 'pi pi-lock' },
    { label: 'Settings', icon: 'pi pi-cog' },
    { label: 'Logout', icon: 'pi pi-sign-out' }
  ];
  constructor(private messageService: MessageService) {}

  showToast() {
    this.messageService.add({
      severity: 'info',
      summary: 'Profile Clicked',
      detail: 'You have clicked on the profile button!',
      life: 3000
    });
  }
}
