import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenantService } from '../../services/tenant.service';
//import { ViewEncapsulation } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-tenant-home',
  templateUrl: './tenant-home.component.html',
  styleUrls: ['./tenant-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TenantHomeComponent implements OnInit {
  tenantConfig: any;

  constructor(
    private route: ActivatedRoute,
    private tenantService: TenantService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      const tenantId = params.get('tenantId') || '';
      this.tenantConfig = this.tenantService.getTenantConfig(tenantId);
      if (this.tenantConfig) {
        document.body.className = this.tenantConfig.theme;
      }
    });
  }

}
