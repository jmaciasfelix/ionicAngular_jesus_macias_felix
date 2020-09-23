import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss']
})
export class FolderPage implements OnInit {
  public folder: string;
  public fecha = new Date(1989, 1, 1);
  public base64Image: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private translateService: TranslateService,
    private truncate: TruncatePipe,
    private camera: Camera
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.translateService.instant('STATUS_NOTICE', { status: 'Active' }),
      // message: this.truncate.transform(this.translateService.instant('STATUS_NOTICE', { status: 'Active' }), 10),
      duration: 2000
    });
    toast.present();
  }

  presentCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.base64Image);
      },
      (err) => {
        // Handle error
      }
    );
  }
}
