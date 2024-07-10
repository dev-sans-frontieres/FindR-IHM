import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbisComponent } from './chatbis.component';

describe('ChatComponent', () => {
  let component: ChatbisComponent;
  let fixture: ComponentFixture<ChatbisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
