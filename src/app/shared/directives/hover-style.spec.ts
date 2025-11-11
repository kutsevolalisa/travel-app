import { HoverStyle } from './hover-style';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HoverStyle', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef;
    const mockRenderer = {} as Renderer2;
    const directive = new HoverStyle(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});