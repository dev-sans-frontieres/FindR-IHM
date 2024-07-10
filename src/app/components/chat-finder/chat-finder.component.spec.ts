import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFinderComponent } from './chat-finder.component';

describe('ChatComponent', () => {
  let component: ChatFinderComponent;
  let fixture: ComponentFixture<ChatFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatFinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
