import { readdirSync } from 'fs';
import { join } from 'path';

export function getCurrentVolunteers(): string[] {
  try {
    const volunteersDirectory = join(process.cwd(), 'public', 'volunteers');
    const files = readdirSync(volunteersDirectory);
    
    // Filter for image files (png, jpg, jpeg, webp)
    const imageFiles = files.filter(file => 
      /\.(png|jpg|jpeg|webp)$/i.test(file)
    );
    
    // Sort alphabetically by name
    return imageFiles.sort((a, b) => {
      const nameA = a.replace(/\.(png|jpg|jpeg|webp)$/i, '');
      const nameB = b.replace(/\.(png|jpg|jpeg|webp)$/i, '');
      return nameA.localeCompare(nameB);
    });
  } catch (error) {
    console.warn('Could not read volunteers directory:', error);
    return [];
  }
}
