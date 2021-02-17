function resetMaterials() {
    materials = {

        storageParts1k: 0,
        storageParts4k: 0,
        storageParts16k: 0,
        storageParts64k: 0,
        storageParts256k: 0,
        storageParts1024k: 0,
        storageParts4096k: 0,
        storageParts16384k: 0,
        storageParts65536k: 0,
        silicon: 0,
        glass: 0,
        redstone: 0,
        quartzIron: 0,
        basicProcessors: 0,
        improvedProcessors: 0,
        advancedProcessors: 0,
        processorBinding: 0,
        ironIngot: 0,
        goldIngot: 0,
        diamond: 0,
    
    }
    return materials;
}

resetMaterials();

  function storageParts1k(amount) {
    materials.silicon = materials.silicon + (amount * 4);
    materials.glass = materials.glass + (amount * 3);
    materials.redstone = materials.redstone + amount;
    materials.quartzIron = materials.quartzIron + amount;
    materials.storageParts1k = materials.storageParts1k + amount;

    return materials;
  }

  function basicProcessors(amount) {
    materials.basicProcessors = materials.basicProcessors + amount;
    materials.processorBinding = materials.processorBinding + amount;
    materials.ironIngot = materials.ironIngot + amount;
    materials.redstone = materials.redstone + amount;
    materials.silicon = materials.silicon + amount;

    return materials;
  }
  
  
  function storageParts4k(amount) {
    basicProcessors(amount * 4);
    materials.quartzIron = materials.quartzIron + amount;
    materials.redstone = materials.redstone + amount;
    storageParts1k(amount * 3);
    materials.storageParts4k = materials.storageParts4k + amount;

    return materials;
}

function improvedProcessors (amount) {
    materials.improvedProcessors = materials.improvedProcessors + amount;
    materials.processorBinding = materials.processorBinding + amount;
    materials.redstone = materials.redstone + amount;
    materials.silicon = materials.silicon + amount;
    materials.goldIngot = materials.goldIngot + amount;
    
    return materials;
}

function storageParts16k (amount) {
    improvedProcessors(amount * 4);
    materials.quartzIron = materials.quartzIron + amount;
    materials.redstone = materials.redstone + amount;
    storageParts4k(amount * 3);
    materials.storageParts16k = materials.storageParts16k + amount;

    return materials;
}

function advancedProcessors (amount) {
    materials.advancedProcessors = materials.advancedProcessors + amount;
    materials.processorBinding = materials.processorBinding + amount;
    materials.redstone = materials.redstone + amount;
    materials.silicon = materials.silicon + amount;
    materials.diamond = materials.diamond + amount;
    
    return materials;
}

function storageParts64k (amount) {
    advancedProcessors(amount * 4);
    materials.quartzIron = materials.quartzIron + amount;
    materials.redstone = materials.redstone + amount;
    storageParts16k(amount * 3);
    materials.storageParts64k = materials.storageParts64k + amount;

    return materials;
}

function storageParts256k (amount) {
    advancedProcessors(amount * 4);
    materials.quartzIron = materials.quartzIron + amount;
    materials.redstone = materials.redstone + amount;
    storageParts64k(amount * 3);
    materials.storageParts256k = materials.storageParts256k + amount;

    return materials;
}

function storageParts1024k (amount) {
    advancedProcessors(amount * 4);
    materials.quartzIron = materials.quartzIron + amount;
    materials.redstone = materials.redstone + amount;
    storageParts256k(amount * 3);
    materials.storageParts1024k = materials.storageParts1024k + amount;

    return materials;
}

function storageParts4096k (amount) {
    advancedProcessors(amount * 4);
    materials.quartzIron = materials.quartzIron + amount;
    materials.redstone = materials.redstone + amount;
    storageParts1024k(amount * 3);
    materials.storageParts4096k = materials.storageParts4096k + amount;

    return materials;
}

function storageParts16384k (amount) {
    advancedProcessors(amount * 4);
    materials.quartzIron = materials.quartzIron + amount;
    materials.redstone = materials.redstone + amount;
    storageParts4096k(amount * 3);
    materials.storageParts16384k = materials.storageParts16384k + amount;

    return materials;
}

function storageParts65536k (amount) {
    amount = parseInt(amount, 10);
    advancedProcessors(amount * 4);
    materials.quartzIron = materials.quartzIron + amount;
    materials.redstone = materials.redstone + amount;
    storageParts16384k(amount * 3);
    materials.storageParts65536k = materials.storageParts65536k + amount;

    return materials;
}



document.querySelector("button").addEventListener("click", function(event) {
    event.preventDefault();
    resetMaterials()
    let processors = document.getElementById("processors").value;
    storageParts65536k(processors);
    document.getElementById('65536k').innerText = "65536k: " + materials.storageParts65536k;
    document.getElementById('16384k').innerText = "16384k: " + materials.storageParts16384k;
    document.getElementById('4096k').innerText = "4096k: " + materials.storageParts4096k;
    document.getElementById('1024k').innerText = "1024k: " + materials.storageParts1024k;
    document.getElementById('256k').innerText = "256k: " + materials.storageParts256k;
    document.getElementById('64k').innerText = "64k: " + materials.storageParts64k;
    document.getElementById('16k').innerText = "16k: " + materials.storageParts16k;
    document.getElementById('4k').innerText = "4k: " + materials.storageParts4k;
    document.getElementById('1k').innerText = "1k: " + materials.storageParts1k;
    document.getElementById('basic').innerText = "Basic: " + materials.basicProcessors;
    document.getElementById('improved').innerText = "Improved: " + materials.improvedProcessors;
    document.getElementById('advanced').innerText = "Advanced: " + materials.advancedProcessors;
    document.getElementById('silicon').innerText = "Silicon: " + materials.silicon;
    document.getElementById('redstone').innerText = "Redstone: " + materials.redstone;
    document.getElementById('glass').innerText = "Glass: " + materials.glass;
    document.getElementById('quartzIron').innerText = "Quartz enriched iron: " + materials.quartzIron;
    document.getElementById('processorBinding').innerText = "Processor bindings: " + materials.processorBinding;
    document.getElementById('ironIngots').innerText = "Iron ingots: " + materials.ironIngot;
    document.getElementById('goldIngots').innerText = "Gold ingots: " + materials.goldIngot;
    document.getElementById('diamonds').innerText = "Diamonds: " + materials.diamond;
});


