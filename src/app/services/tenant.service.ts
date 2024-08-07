import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private tenantConfig: any = {
    'tenant0': { name: 'Tenant 0', theme: 'theme0' },
    'tenant1': { name: 'Tenant 1', theme: 'theme1' },
    // Adicione mais tenants aqui
  };

  getTenantConfig(tenantId: string) {
    return this.tenantConfig[tenantId] || null;
  }
}
