import { TestBed } from '@angular/core/testing';
import {  CartServiceClass } from './cart';


describe('Cart', () => {
  let service: CartServiceClass;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServiceClass);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
