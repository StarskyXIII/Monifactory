ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor("sodium_cyanide")
        .inputFluids('gtceu:hydrogen_cyanide 500')
        .itemInputs('gtceu:sodium_hydroxide_dust')
        .outputFluids('minecraft:water 500')
        .itemOutputs('gtceu:sodium_cyanide_dust')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.IV])

    event.recipes.gtceu.chemical_reactor("chloroacetatic_mixture")
        .notConsumableFluid('gtceu:acetic_anhydride 500')
        .inputFluids('gtceu:acetic_acid 1000', 'gtceu:chlorine 2000')
        .outputFluids('gtceu:chloroacetic_mixture 3000')
        .duration(20)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.distillation_tower("chloroacetate_distillation")
        .inputFluids('gtceu:chloroacetic_mixture 1000')
        .itemOutputs('gtceu:small_chloroacetate_dust')
        .outputFluids('gtceu:dichloroacetate 200', 'gtceu:trichloroacetate 100', 'gtceu:hydrochloric_acid 450')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.large_chemical_reactor("cyanoacetic_acid")
        .itemInputs('2x gtceu:chloroacetate_dust', '2x gtceu:sodium_cyanide_dust', '1x gtceu:soda_ash_dust')
        .inputFluids('gtceu:hydrochloric_acid 700', 'minecraft:water 700')
        .itemOutputs('2x gtceu:cyanoacetic_acid_dust')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_reactor("ethyl_cyanoacetate")
        .notConsumableFluid('gtceu:fluoroantimonic_acid 2000')
        .inputFluids('gtceu:ethanol 1000')
        .itemInputs('gtceu:cyanoacetic_acid_dust')
        .outputFluids('gtceu:ethyl_cyanoacetate 500')
        .duration(360)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor("uncracked_ethyl_cyanoacrylate")
        .inputFluids('gtceu:ethyl_cyanoacetate 1000', 'gtceu:formaldehyde 1000')
        .outputFluids('gtceu:uncracked_ethyl_cyanoacrylate 1000', 'minecraft:water 1000')
        .duration(320)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_reactor('ethyl_cyanoacrylate_hydro')
        .inputFluids('gtceu:uncracked_ethyl_cyanoacrylate 500', 'gtceu:hydrogen 3000')
        .outputFluids('gtceu:ethyl_cyanoacrylate 250')
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('ethyl_cyanoacrylate_steam')
        .inputFluids('gtceu:uncracked_ethyl_cyanoacrylate 1000', 'gtceu:steam 1000')
        .outputFluids('gtceu:ethyl_cyanoacrylate 500')
        .duration(240)
        .EUt(GTValues.VA[GTValues.LV])

    // Needs to be LCR to fit all the fluids
    event.recipes.gtceu.large_chemical_reactor('polyethyl_cyanoacrylate')
        .notConsumableFluid('gtceu:dimethyl_sulfoxide 500')
        .inputFluids('gtceu:ethyl_cyanoacrylate 1000', 'gtceu:acetone 3000', 'gtceu:air 750')
        .itemOutputs('gtceu:polyethyl_cyanoacrylate_dust')
        .outputFluids('gtceu:acetone 1600')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.LuV])

    //Dimethyl sulfoxide (catalyst) chain below
    event.recipes.gtceu.chemical_reactor('dimethyl_sulfoxide')
        .inputFluids('gtceu:dimethyl_sulfide 1000', 'gtceu:nitrogen_dioxide 1000')
        .outputFluids('gtceu:dimethyl_sulfoxide 1000', 'gtceu:nitric_oxide 1000')
        .duration(10000)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_reactor('dimethyl_sulfide')
        .notConsumable('gtceu:aluminium_dust')
        .inputFluids('gtceu:hydrogen_sulfide 1000', 'gtceu:methanol 2000')
        .outputFluids('gtceu:dimethyl_sulfide 1000', 'minecraft:water 2000')
        .duration(500)
        .EUt(GTValues.VHA[GTValues.LuV])

    //Uses for PECA with higher efficiency than PBI
    event.recipes.gtceu.bender('fluid_cell_peca')
        .itemInputs('gtceu:polyethyl_cyanoacrylate_plate')
        .itemOutputs('32x gtceu:fluid_cell')
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(12)

    event.recipes.gtceu.chemical_reactor('plastic_board_peca')
        .itemInputs('gtceu:polyethyl_cyanoacrylate_plate', '4x gtceu:copper_foil')
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs('16x gtceu:plastic_circuit_board')
        .duration(500)
        .EUt(10)

    event.recipes.gtceu.assembler('duct_tape_peca')
        .itemInputs('gtceu:polyethyl_cyanoacrylate_foil', 'gtceu:carbon_fiber_mesh')
        .inputFluids('gtceu:polyethylene 36')
        .itemOutputs('32x gtceu:duct_tape')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
})