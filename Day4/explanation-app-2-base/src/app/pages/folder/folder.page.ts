import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { LabelService } from '../../services/label.service';
import { FolderPageService } from './folder-page.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private folderPageService: FolderPageService,
    private activatedRoute: ActivatedRoute,
    private juanito: LabelService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.juanito.contador);
  }
}
