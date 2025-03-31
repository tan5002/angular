import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule  // ✅ Đảm bảo đã import
  ],
})
export class ProductFormComponent {
  productForm: FormGroup;
  availableColors = ['Đỏ', 'Xanh', 'Vàng', 'Trắng', 'Đen'];
  selectedFiles: File[] = [];


  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(250)]],
      price: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      colors: this.fb.array([]), 
      photos: this.fb.array([])   
    });
  }

  // Xử lý chọn màu
  onColorChange(event: Event, color: string) {
    const checkbox = event.target as HTMLInputElement;
    const colorsArray = this.productForm.get('colors') as FormArray;

    if (checkbox.checked) {
      colorsArray.push(this.fb.control(color));
    } else {
      const index = colorsArray.controls.findIndex(control => control.value === color);
      colorsArray.removeAt(index);
    }
  }

  // Getter cho colors và photos
  get colors() {
    return this.productForm.get('colors') as FormArray;
  }

  get photos() {
    return this.productForm.get('photos') as FormArray;
  }

  // Thêm ảnh
  addPhoto() {
    this.photos.push(this.fb.control('', Validators.required));
  }

  // Xóa ảnh
  removePhoto(index: number) {
    this.photos.removeAt(index);
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles.push(input.files[0]); // Lưu file vào danh sách
    }
  }
  
  // Xử lý submit
  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form Submitted!', this.productForm.value);
    }
  }
}
