import type * as grpc from '@grpc/grpc-js';
import * as health from 'grpc-js-health-check';

export default class HealthService {
  private readonly healthImpl: health.Implementation;
  public readonly service: grpc.ServiceDefinition;
  public readonly handlers: grpc.UntypedServiceImplementation;

  constructor() {
    this.healthImpl = new health.Implementation({
      '': health.servingStatus.SERVING,
    });

    this.service = health.service;
    this.handlers = this.healthImpl;
  }

  public setStatus(service: string, status: string): void {
    const statusValue = (health.servingStatus as any)[status] || health.servingStatus.UNKNOWN;
    this.healthImpl.setStatus(service, statusValue);
  }
}