import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PessoaFormComponent} from './pessoa-form.component';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {PessoaService} from '../../../../services/pessoa.service';
import {provideNgxMask} from 'ngx-mask';

describe('PessoaFormComponent', () => {
  let component: PessoaFormComponent;
  let fixture: ComponentFixture<PessoaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaFormComponent],
      providers: [
        PessoaService,
        provideNgxMask(),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
