import Konva from 'konva';

export default class InsectImage {
  constructor({
    imageSrc,
    group
  }) {
    this.group = group;
    Konva.Image.fromURL(imageSrc, this.onImageLoad.bind(this));
  }

  onImageLoad(image) {
    image.cache();
    image.filters([
      // Konva.Filters.Invert
    ]);
    image.scale({ x: 0.2, y: 0.2 });
    image.position({ x: 200, y: 200 });
    this.group.add(image);
    this.group.draw();
  }
}
