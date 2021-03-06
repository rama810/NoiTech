const XZimurNoiseMineralExtractor = extendContent(GenericCrafter, "mineral-extractor", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		Draw.color(tile.entity.liquids.current().color);
		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
		Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
		Draw.color();
		Draw.rect(Core.atlas.find(this.name + "-spinner"), tile.drawx() + 3, tile.drawy() + 3, tile.entity.totalProgress * 2);
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
});