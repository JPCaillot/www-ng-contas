import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PessoaPageComponent} from './pessoa-page.component';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('PessoaPageComponent', () => {
  let component: PessoaPageComponent;
  let fixture: ComponentFixture<PessoaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaPageComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
