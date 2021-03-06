/*Liquid Combustion Generator*/
const XZimurNoiseLiquidCombustionGenerator = extendContent(SingleTypeGenerator, "liquid-combustion-generator", {
		getLiquidEfficiency(liquid){
		return 1.0;
	},
		getItemEfficiency(item){
		return 0.0;
	},
	draw(tile){
		var entity = tile.ent();
		Draw.rect(Core.atlas.find(this.name), tile.drawx(), tile.drawy());
		Draw.color("ff9b59");
		Draw.alpha(entity.heat * 0.4 + Mathf.absin(Time.time(), 8, 0.6) * entity.heat);
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
		Draw.reset();
	}
});

/*Oil Combustion Generator*/
const XZimurNoiseOilCombustionGenerator = extendContent(SingleTypeGenerator, "oil-combustion-generator", {
		getLiquidEfficiency(liquid){
		return 1.0;
	},
		getItemEfficiency(item){
		return 0.0;
	},
	draw(tile){
		var entity = tile.ent();
		Draw.rect(Core.atlas.find(this.name), tile.drawx(), tile.drawy());
		Draw.color("ff9b59");
		Draw.alpha(entity.heat * 0.4 + Mathf.absin(Time.time(), 8, 0.6) * entity.heat);
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
		Draw.reset();
	}
});

/*Thermal Liquid Generator*/
const XZimurNoiseThermalLiquidGenerator = extendContent(SingleTypeGenerator, "thermal-liquid-generator", {
		getLiquidEfficiency(liquid){
		return 1.0;
	},
		getItemEfficiency(item){
		return 0.0;
	},
	draw(tile){
		var entity = tile.ent();
		Draw.rect(Core.atlas.find(this.name), tile.drawx(), tile.drawy());
		Draw.color("ff9b59");
		Draw.alpha(entity.heat * 0.4 + Mathf.absin(Time.time(), 8, 0.6) * entity.heat);
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
		Draw.reset();
	},
	drawLight(tile){
		var renderer = Vars.renderer;
		var entity = tile.ent();
		renderer.lights.add(tile.drawx(), tile.drawy(), (40 + Mathf.absin(10, 5)) * entity.productionEfficiency * this.size, Color.scarlet, 0.4);
	}
});

//final print
print("[lightgray]blocks/power - is successfully loaded.")