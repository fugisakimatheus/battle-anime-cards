type LogoProps = {
  size?: string;
  color?: string;
};

export const Logo = (props: LogoProps) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: props.size || "500px" }}
      viewBox="0 0 550 470"
    >
      <g
        fill={props.color ?? "#0f172a"}
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g data-paper-data='{"isGlobalGroup":true,"bounds":{"x":146,"y":106,"width":258,"height":258}}'>
          <g
            data-paper-data='{"fillRule":"nonzero","fillRuleOriginal":"nonzero","isIcon":true,"iconStyle":"standalone","selectedEffects":{"container":"circle_simple_outline3","transformation":"","pattern":""},"bounds":{"x":199.2847454265956,"y":159.28474522734479,"width":151.43061674224205,"height":151.4306091707112},"widthRatioIconToContainer":0.8173935729070079,"heightRatioIconToContainer":0.8185986126836419,"relativeBoundsIconToContainer":{"top":-2.9726646820862963e-7,"left":-0.0003373413542173045},"iconType":"initial","initialText":"BAC","rawInitialId":425,"blockLetter":"O","monogramSpecial":"emblem","suitableAsStandaloneIcon":true}'
            fillRule="nonzero"
            id="element-id-43756"
          >
            <path
              d="M252.63457,216.78739l-10.54415,9.31172l10.54415,11.50271v55.87031c-24.92254,-10.54415 -39.57481,-32.59102 -39.57481,-58.47212c0,-26.01804 14.92614,-48.0649 39.57481,-58.47212zM244.69222,189.39997c-10.95496,7.53154 -19.71893,20.67749 -22.32074,32.72796h11.50271l10.81803,-9.85947zM233.87419,229.93334h-12.73514c-0.27387,22.73155 7.12072,39.43787 23.55317,50.66671v-39.30093zM266.69547,296.71058c-2.56389,-0.40483 -5.12777,-0.94459 -7.69166,-1.6193v-119.82799c9.85072,-3.23859 23.74969,-2.56389 31.84618,-0.53977v120.77259c-2.83377,0.67471 -5.39766,1.21447 -7.69166,1.48435v-67.74059h-16.46286zM283.15832,181.20071c-4.18319,-1.07953 -12.27967,-0.94459 -16.46286,0.13495v40.21254h16.46286zM297.21922,176.52789c17.76022,7.37733 28.41636,18.98978 35.79368,36.61339h-8.33364c-4.37175,-9.69981 -10.92937,-17.76022 -19.53625,-23.77137v91.39684c13.93494,-9.83643 22.54183,-24.86431 23.77137,-41.80483h7.9238c-0.95632,15.1645 -6.96747,29.37267 -18.44331,40.98513c-5.87454,5.73792 -12.84201,9.97305 -21.03904,13.52509zM221.46123,181.46121c6.98527,-6.98527 15.00728,-12.39368 24.06607,-16.22521c9.38031,-3.9675 19.20454,-5.95126 29.4727,-5.95126c10.26813,0 20.0924,1.98376 29.47283,5.95126c9.0586,3.83156 17.08057,9.23996 24.06591,16.22521c6.98534,6.98527 12.39372,15.0073 16.22516,24.06607c3.96765,9.38028 5.95147,19.20451 5.95147,29.4727c0,10.26813 -1.98382,20.0924 -5.95147,29.47283c-3.83144,9.0589 -9.23983,17.08087 -16.22516,24.06591c-6.98534,6.98534 -15.0073,12.39372 -24.06591,16.22516c-9.38042,3.96765 -19.2047,5.95147 -29.47283,5.95147c-10.26819,0 -20.09242,-1.98382 -29.4727,-5.95147c-9.05881,-3.83144 -17.08083,-9.23983 -24.06607,-16.22516c-6.98529,-6.98534 -12.39369,-15.0073 -16.22522,-24.06591c-3.9675,-9.38042 -5.95126,-19.2047 -5.95126,-29.47283c0,-10.26819 1.98376,-20.09242 5.95126,-29.4727c3.83156,-9.05881 9.23996,-17.08084 16.22522,-24.06607zM225.5796,284.4204c6.44978,6.44985 13.8553,11.44302 22.21657,14.97953c8.65509,3.66074 17.72303,5.49111 27.20382,5.49111c9.48097,0 18.54893,-1.83037 27.20387,-5.49111c8.36118,-3.53651 15.76669,-8.52969 22.21654,-14.97953c6.44985,-6.44985 11.44302,-13.85536 14.97953,-22.21654c3.66074,-8.65523 5.49111,-17.72319 5.49111,-27.20387c0,-9.48083 -1.83037,-18.54877 -5.49111,-27.20382c-3.53651,-8.36132 -8.52969,-15.76686 -14.97953,-22.21658c-6.44985,-6.44976 -13.85536,-11.44288 -22.21654,-14.9794c-8.65523,-3.6608 -17.72319,-5.49119 -27.20387,-5.49119c-9.4808,0 -18.54874,1.83039 -27.20382,5.49119c-8.36129,3.53651 -15.76682,8.52965 -22.21657,14.9794c-6.44973,6.44976 -11.44288,13.85529 -14.97942,22.21658c-3.6608,8.65505 -5.49119,17.723 -5.49119,27.20382c0,9.48068 1.83039,18.54864 5.49119,27.20387c3.53654,8.36118 8.52968,15.76669 14.97942,22.21654z"
              data-paper-data='{"isPathIcon":true}'
              id="element-id-34971"
            ></path>
          </g>
          <g
            data-paper-data='{"isPrimaryText":true}'
            fillRule="nonzero"
            id="element-id-89917"
          >
            <path
              d="M165.92047,209.41763l0.49253,-1.95695c0.22644,-0.8997 1.14286,-1.44758 2.04256,-1.22114l2.11813,0.5331c0.8997,0.22644 1.44758,1.14286 1.22114,2.04256l-0.49253,1.95695zM180.21546,209.1993c0.8997,0.22644 1.44736,1.1428 1.22092,2.0425l-0.49253,1.95695l-7.31032,-1.83988l0.49253,-1.95695c0.22644,-0.8997 1.14286,-1.44758 2.04256,-1.22114zM182.9817,214.95108l0.78589,-3.12256c0.54994,-2.18506 -0.78035,-4.4105 -2.96541,-4.96045l-4.04685,-1.01852c-1.09091,-0.27456 -2.19167,-0.08028 -3.08913,0.45482c-0.53724,-0.89619 -1.41488,-1.5884 -2.50579,-1.86296l-2.11813,-0.5331c-2.18529,-0.55 -4.41056,0.78057 -4.9605,2.96564l-0.78589,3.12256c-0.16204,0.64382 0.22843,1.29693 0.87225,1.45897l7.71305,1.94124l9.64154,2.4266c0.64382,0.16204 1.29693,-0.22843 1.45897,-0.87225z"
              data-paper-data='{"glyphName":"B","glyphIndex":0,"firstGlyphOfWord":true,"word":1}'
              id="element-id-91309"
            ></path>
            <path
              d="M172.20147,190.45772c0.40342,-0.932 1.49003,-1.36209 2.42224,-0.95858l3.40245,1.47277l-1.46354,3.38113l-3.40245,-1.47277c-0.93221,-0.40351 -1.36231,-1.49012 -0.9587,-2.42255zM187.4154,200.36045c0.26372,-0.60927 -0.01633,-1.3168 -0.62559,-1.58052l-8.02107,-3.47196l1.46354,-3.38113l8.02107,3.47196c0.60927,0.26372 1.3168,-0.01633 1.58052,-0.62559c0.26372,-0.60927 -0.01633,-1.3168 -0.62559,-1.58052l-13.62964,-5.89966c-2.14859,-0.93003 -4.65334,0.06139 -5.58328,2.20976c-0.93012,2.14881 0.0613,4.65356 2.20989,5.58359l13.62964,5.89966c0.60927,0.26372 1.3168,-0.01633 1.58052,-0.62559z"
              data-paper-data='{"glyphName":"A","glyphIndex":1,"word":1}'
              id="element-id-21006"
            ></path>
            <path
              d="M180.09262,175.45329l14.04291,9.02713c0.55846,0.35899 1.30203,0.19733 1.66102,-0.36113c0.35899,-0.55846 0.19733,-1.30203 -0.36113,-1.66102l-14.04291,-9.02713l1.00056,-1.55651c0.35899,-0.55846 0.19733,-1.30203 -0.36113,-1.66102c-0.55846,-0.35899 -1.30203,-0.19733 -1.66102,0.36113l-3.30101,5.13516c-0.35899,0.55846 -0.19733,1.30203 0.36113,1.66102c0.55846,0.35899 1.30203,0.19733 1.66102,-0.36113l1.00056,-1.55651z"
              data-paper-data='{"glyphName":"T","glyphIndex":2,"word":1}'
              id="element-id-75223"
            ></path>
            <path
              d="M190.95078,160.92279l12.4007,11.17653c0.49315,0.44447 1.25307,0.40502 1.69754,-0.08814c0.44447,-0.49315 0.40502,-1.25307 -0.08814,-1.69754l-12.4007,-11.17653l1.2388,-1.37448c0.44447,-0.49315 0.40502,-1.25307 -0.08814,-1.69754c-0.49315,-0.44447 -1.25307,-0.40502 -1.69754,0.08814l-4.087,4.53465c-0.44447,0.49315 -0.40502,1.25307 0.08814,1.69754c0.49315,0.44447 1.25307,0.40502 1.69754,-0.08814l1.2388,-1.37448z"
              data-paper-data='{"glyphName":"T","glyphIndex":3,"word":1}'
              id="element-id-81037"
            ></path>
            <path
              d="M213.75475,163.45751l4.7635,-3.81781c0.51804,-0.4152 0.6014,-1.17155 0.1862,-1.6896c-0.4152,-0.51804 -1.17155,-0.6014 -1.6896,-0.1862l-3.8256,3.06611l-10.44024,-13.02635c-0.4152,-0.51804 -1.17155,-0.6014 -1.6896,-0.1862c-0.51804,0.4152 -0.6014,1.17155 -0.1862,1.6896l11.19194,13.96425c0.4152,0.51804 1.17155,0.6014 1.6896,0.1862z"
              data-paper-data='{"glyphName":"L","glyphIndex":4,"word":1}'
              id="element-id-86627"
            ></path>
            <path
              d="M226.10452,154.50699l5.31594,-3.00122c0.57812,-0.32639 0.78214,-1.05947 0.45575,-1.63759c-0.32639,-0.57812 -1.05947,-0.78214 -1.63759,-0.45575l-4.26927,2.4103l-3.70606,-6.56438l2.92454,-1.65111c0.57812,-0.32639 0.78214,-1.05947 0.45575,-1.63759c-0.32639,-0.57812 -1.05947,-0.78214 -1.63759,-0.45575l-2.92454,1.65111l-2.72839,-4.83267l4.26927,-2.4103c0.57812,-0.32639 0.78214,-1.05947 0.45575,-1.63759c-0.32639,-0.57812 -1.05947,-0.78214 -1.63759,-0.45575l-5.31594,3.00122c-0.57812,0.32639 -0.78214,1.05947 -0.45575,1.63759l8.79812,15.58374c0.32639,0.57812 1.05947,0.78214 1.63759,0.45575z"
              data-paper-data='{"glyphName":"E","glyphIndex":5,"lastGlyphOfWord":true,"word":1}'
              id="element-id-2018"
            ></path>
            <path
              d="M248.83634,126.06309c0.98754,-0.23693 1.98387,0.37383 2.22085,1.36159l0.86497,3.60522l-3.58262,0.85954l-0.86497,-3.60522c-0.23699,-0.98777 0.37377,-1.9841 1.36176,-2.22114zM250.05111,144.1753c0.64557,-0.15489 1.04326,-0.80363 0.88837,-1.44921l-2.0391,-8.49907l3.58262,-0.85954l2.0391,8.49907c0.15489,0.64557 0.80363,1.04326 1.44921,0.88837c0.64557,-0.15489 1.04326,-0.80363 0.88837,-1.44921l-3.46491,-14.44187c-0.54621,-2.27663 -2.84287,-3.68449 -5.11927,-3.13834c-2.27686,0.54627 -3.68472,2.84292 -3.13851,5.11955l3.46491,14.44187c0.15489,0.64557 0.80363,1.04326 1.44921,0.88837z"
              data-paper-data='{"glyphName":"A","glyphIndex":6,"firstGlyphOfWord":true,"word":2}'
              id="element-id-90257"
            ></path>
            <path
              d="M268.74861,124.98655l1.08413,14.80408c0.04849,0.66212 0.62441,1.15945 1.28654,1.11096c0.66212,-0.04849 1.15945,-0.62441 1.11096,-1.28654l-1.08413,-14.80408c-0.17132,-2.33943 -2.21418,-4.10328 -4.55362,-3.93196c-2.33943,0.17132 -4.10307,2.21393 -3.93175,4.55336l1.08413,14.80408c0.04849,0.66212 0.62441,1.15945 1.28654,1.11096c0.66212,-0.04849 1.15945,-0.62441 1.11096,-1.28654l-1.08413,-14.80408c-0.07452,-1.01753 0.69276,-1.90581 1.71029,-1.98033c1.01753,-0.07452 1.90556,0.69254 1.98008,1.71007z"
              data-paper-data='{"glyphName":"N","glyphIndex":7,"word":2}'
              id="element-id-85458"
            ></path>
            <path
              d="M280.58362,140.95662c0.66275,0.03898 1.23148,-0.46657 1.27045,-1.12932l1.05069,-17.86494c0.03898,-0.66275 -0.46657,-1.23148 -1.12932,-1.27045c-0.66275,-0.03898 -1.23148,0.46657 -1.27045,1.12932l-1.05069,17.86494c-0.03898,0.66275 0.46657,1.23148 1.12932,1.27045z"
              data-paper-data='{"glyphName":"I","glyphIndex":8,"word":2}'
              id="element-id-21162"
            ></path>
            <path
              d="M301.58967,143.33048l3.23096,-14.89597c0.45065,-2.07765 -0.87268,-4.13436 -2.95034,-4.58501c-1.00748,-0.21852 -2.00846,-0.01709 -2.82545,0.48242c-0.53657,-0.79328 -1.36422,-1.39141 -2.37185,-1.60997c-2.07765,-0.45065 -4.13418,0.87296 -4.58483,2.95062l-3.23101,14.8962c-0.14073,0.64881 0.27105,1.2887 0.91986,1.42943c0.64881,0.14073 1.2887,-0.27105 1.42943,-0.91986l3.23101,-14.8962c0.16964,-0.7821 0.9441,-1.28048 1.72597,-1.11089c0.78233,0.16969 1.28071,0.94415 1.11107,1.72625l-3.23101,14.8962c-0.14073,0.64881 0.27105,1.2887 0.91986,1.42943c0.00181,0.00039 0.00359,0.00021 0.00539,0.0006c0.00181,0.00039 0.00335,0.0013 0.00516,0.00169c0.64881,0.14073 1.2887,-0.27105 1.42943,-0.91986l3.23096,-14.89597c0.16964,-0.7821 0.9441,-1.28048 1.72643,-1.11079c0.78187,0.16959 1.28025,0.94405 1.11061,1.72615l-3.23096,14.89597c-0.14073,0.64881 0.27105,1.2887 0.91986,1.42943c0.64881,0.14073 1.2887,-0.27105 1.42943,-0.91986z"
              data-paper-data='{"glyphName":"M","glyphIndex":9,"word":2}'
              id="element-id-52905"
            ></path>
            <path
              d="M308.64576,147.02636l5.62729,2.36647c0.61198,0.25736 1.31655,-0.03005 1.57391,-0.64203c0.25736,-0.61198 -0.03005,-1.31655 -0.64203,-1.57391l-4.51932,-1.90053l2.92223,-6.94885l3.09583,1.3019c0.61198,0.25736 1.31655,-0.03005 1.57391,-0.64203c0.25736,-0.61198 -0.03005,-1.31655 -0.64203,-1.57391l-3.09583,-1.3019l2.15133,-5.11572l4.51932,1.90053c0.61198,0.25736 1.31655,-0.03005 1.57391,-0.64203c0.25736,-0.61198 -0.03005,-1.31655 -0.64203,-1.57391l-5.62729,-2.36647c-0.61198,-0.25736 -1.31655,0.03005 -1.57391,0.64203l-6.93733,16.49647c-0.25736,0.61198 0.03005,1.31655 0.64203,1.57391z"
              data-paper-data='{"glyphName":"E","glyphIndex":10,"lastGlyphOfWord":true,"word":2}'
              id="element-id-15793"
            ></path>
            <path
              d="M333.86538,161.55006c1.83037,1.46699 4.51312,1.1715 5.9801,-0.65886l0.26838,-0.33486c0.4152,-0.51804 0.33184,-1.2744 -0.1862,-1.6896c-0.51804,-0.4152 -1.2744,-0.33184 -1.6896,0.1862l-0.26838,0.33486c-0.63806,0.79611 -1.80479,0.92453 -2.60091,0.28646c-0.79611,-0.63806 -0.92486,-1.80476 -0.28679,-2.60087l7.37443,-9.20112c0.63806,-0.79611 1.80479,-0.92453 2.60091,-0.28646c0.79611,0.63806 0.92486,1.80476 0.28679,2.60087l-0.26999,0.33687c-0.4152,0.51804 -0.33184,1.2744 0.1862,1.6896c0.51804,0.4152 1.2744,0.33184 1.6896,-0.1862l0.26999,-0.33687c1.46699,-1.83037 1.17117,-4.51308 -0.65919,-5.98007c-1.83037,-1.46699 -4.51312,-1.1715 -5.9801,0.65886l-7.37443,9.20112c-1.46699,1.83037 -1.17117,4.51308 0.65919,5.98007z"
              data-paper-data='{"glyphName":"C","glyphIndex":11,"firstGlyphOfWord":true,"word":3}'
              id="element-id-27790"
            ></path>
            <path
              d="M358.24039,160.02533c0.67997,0.75433 0.61946,1.92139 -0.13504,2.60151l-2.75383,2.48237l-2.46681,-2.73657l2.75383,-2.48237c0.7545,-0.68013 1.92156,-0.61962 2.60185,0.13505zM342.90963,169.74622c0.44451,0.49312 1.20443,0.53252 1.69755,0.08801l6.49198,-5.85203l2.46681,2.73657l-6.49198,5.85203c-0.49312,0.44451 -0.53252,1.20443 -0.08801,1.69755c0.44451,0.49312 1.20443,0.53252 1.69755,0.08801l11.03137,-9.94395c1.739,-1.56757 1.87846,-4.25779 0.31105,-5.99661c-1.56773,-1.73917 -4.25794,-1.87864 -5.99694,-0.31106l-11.03137,9.94395c-0.49312,0.44451 -0.53252,1.20443 -0.08801,1.69755z"
              data-paper-data='{"glyphName":"A","glyphIndex":12,"word":3}'
              id="element-id-13470"
            ></path>
            <path
              d="M368.2579,172.88788l1.09095,1.69711c0.50168,0.78042 0.27484,1.82375 -0.50558,2.32543l-2.05809,1.323c-0.65878,0.42348 -1.53925,0.23206 -1.96273,-0.42672c-0.01626,-0.0253 -0.0371,-0.0454 -0.05489,-0.06906c-0.02946,-0.05045 -0.05515,-0.10213 -0.08703,-0.15172l-1.09095,-1.69711l4.66832,-3.00093zM371.371,173.28509l-1.74089,-2.70818c-0.35899,-0.55846 -1.10256,-0.72012 -1.66102,-0.36113l-15.05377,9.67698c-0.55846,0.35899 -0.72012,1.10256 -0.36113,1.66102c0.35899,0.55846 1.10256,0.72012 1.66102,0.36113l7.35222,-4.72621l1.09095,1.69711c0.50168,0.78042 0.27484,1.82375 -0.50558,2.32543l-5.93671,3.81628c-0.55846,0.35899 -0.72012,1.10256 -0.36113,1.66102c0.35899,0.55846 1.10256,0.72012 1.66102,0.36113l5.93671,-3.81628c0.91332,-0.58711 1.51067,-1.48045 1.75212,-2.45968c0.95702,0.20815 1.9933,0.05202 2.88026,-0.51815l2.05809,-1.323c1.89557,-1.21852 2.44623,-3.75211 1.22783,-5.64748z"
              data-paper-data='{"glyphName":"R","glyphIndex":13,"word":3}'
              id="element-id-67946"
            ></path>
            <path
              d="M377.06073,188.75406l0.80176,1.85186c0.36861,0.85139 -0.02426,1.84419 -0.87565,2.2128l-11.12842,4.81804c-0.85139,0.36861 -1.84397,-0.02436 -2.21258,-0.87575l-0.80176,-1.85186zM360.16048,194.76124l1.27931,2.95488c0.89522,2.06773 3.30599,3.0219 5.37372,2.12668l11.12842,-4.81804c2.06794,-0.89531 3.02181,-3.30621 2.12659,-5.37394l-1.27931,-2.95488c-0.26377,-0.60925 -0.97132,-0.88924 -1.58057,-0.62547l-16.4227,7.11019c-0.60925,0.26377 -0.88924,0.97132 -0.62547,1.58057z"
              data-paper-data='{"glyphName":"D","glyphIndex":14,"word":3}'
              id="element-id-37962"
            ></path>
            <path
              d="M385.96029,207.03863c-0.57252,-2.27476 -2.88898,-3.65985 -5.16373,-3.08733l-2.21033,0.5563c-2.04482,0.51465 -3.28982,2.5971 -2.77517,4.64192l0.26322,1.04586c0.16181,0.64291 -0.22957,1.29722 -0.87225,1.45897l-4.35054,1.09495c-0.9894,0.24901 -1.99678,-0.35344 -2.24579,-1.34284c-0.24901,-0.9894 0.35315,-1.99695 1.34255,-2.24596l0.41866,-0.10537c0.64382,-0.16204 1.03428,-0.81515 0.87225,-1.45897c-0.16204,-0.64382 -0.81515,-1.03428 -1.45897,-0.87225l-0.41866,0.10537c-2.27476,0.57252 -3.65956,2.88915 -3.08705,5.1639c0.57252,2.27476 2.88898,3.65985 5.16373,3.08733l4.35054,-1.09495c1.92826,-0.48531 3.10205,-2.44865 2.61674,-4.37691l-0.26322,-1.04586c-0.19114,-0.75947 0.27121,-1.53284 1.03068,-1.72398l2.21033,-0.5563c0.9894,-0.24901 1.99678,0.35344 2.24579,1.34284c0.24901,0.9894 -0.35315,1.99695 -1.34255,2.24596l-0.41866,0.10537c-0.64382,0.16204 -1.03428,0.81515 -0.87225,1.45897c0.16204,0.64382 0.81515,1.03428 1.45897,0.87225l0.41866,-0.10537c2.27476,-0.57252 3.65956,-2.88915 3.08705,-5.1639z"
              data-paper-data='{"glyphName":"S","glyphIndex":15,"lastGlyphOfWord":true,"word":3}'
              id="element-id-26161"
            ></path>
          </g>
          <g
            data-paper-data='{"isContainerElementsWrapper":true}'
            fillRule="evenodd"
            id="element-id-7890"
          >
            <path
              d="M275.00005,106c-17.48572,0 -34.22578,3.38251 -50.22017,10.14754c-15.43634,6.52898 -29.10189,15.74088 -40.99665,27.63569c-11.89474,11.8947 -21.10664,25.56021 -27.63569,40.99655c-6.76503,15.99439 -10.14754,32.73448 -10.14754,50.22027c0,17.48559 3.38251,34.22564 10.14754,50.22017c6.52898,15.43596 15.74088,29.10158 27.63569,40.99685c11.89477,11.89461 25.56028,21.10631 40.99655,27.63509c15.99439,6.76523 32.73448,10.14784 50.22027,10.14784c17.48555,0 34.22531,-3.38228 50.22017,-10.14784c15.43596,-6.52878 29.10158,-15.74048 40.99685,-27.63509c11.89461,-11.89461 21.10631,-25.56022 27.63509,-40.99685c6.76523,-15.99453 10.14784,-32.73458 10.14784,-50.22017c0,-17.48535 -3.38228,-34.22541 -10.14685,-50.22027c-6.52945,-15.43641 -15.74148,-29.10193 -27.63609,-40.99655c-11.89461,-11.89494 -25.56022,-21.10684 -40.99685,-27.63569c-15.99386,-6.76503 -32.73392,-10.14754 -50.22017,-10.14754zM216.79939,176.79939c-15.76673,15.76678 -23.79965,34.73699 -24.09877,56.91061h-44.11445c0.16239,-16.67062 3.47493,-32.64575 9.93763,-47.9252c6.39828,-15.12727 15.4262,-28.51968 27.08376,-40.17723c11.65763,-11.65763 25.05008,-20.68555 40.17733,-27.08376c15.67313,-6.62927 32.07818,-9.94391 49.21515,-9.94391c17.13686,0 33.54188,3.31464 49.21594,9.94391c15.12712,6.39834 28.5191,15.42627 40.17594,27.08377c11.65816,11.65772 20.68622,25.05013 27.08416,40.17722c6.46237,15.27941 9.77491,31.25448 9.93763,47.9252h-44.11413c-0.29888,-22.17373 -8.33167,-41.1439 -24.09839,-56.91061c-16.07223,-16.07164 -35.47262,-24.10745 -58.20116,-24.10745c-22.7288,0 -42.12902,8.03582 -58.20066,24.10745zM275.00005,155.27193c22.01655,0 40.80856,7.78393 56.37602,23.35179c15.56813,15.56806 23.35219,34.36017 23.35219,56.37632c0,22.01622 -7.78373,40.80856 -23.35219,56.37602c-15.56747,15.56813 -34.35947,23.35219 -56.37602,23.35219c-22.01632,0 -40.80836,-7.78373 -56.37632,-23.35219c-15.5673,-15.5668 -23.35123,-34.35801 -23.35179,-56.37363l0,-0.00239c0,-22.01635 7.78393,-40.80846 23.35178,-56.37632c15.56793,-15.56786 34.36004,-23.35179 56.37632,-23.35179zM163.29567,260.00403l0.78585,3.12226c0.55003,2.18479 2.77526,3.51578 4.96035,2.96585l4.04678,-1.01917c1.0909,-0.27397 1.9686,-0.96637 2.50578,-1.86299c0.89753,0.53499 1.99829,0.72926 3.08918,0.45529l2.11814,-0.533c2.18528,-0.54993 3.51558,-2.77556 2.96565,-4.96035l-0.78594,-3.12326c-0.16199,-0.64348 -0.81514,-1.03391 -1.45891,-0.87192l-7.7131,1.9409l-9.64155,2.42687c-0.64378,0.16239 -1.03421,0.81494 -0.87222,1.45951zM366.27485,258.00654c-0.57285,2.27544 0.81195,4.59173 3.08739,5.16458l2.20969,0.55591c2.04531,0.51506 4.12748,-0.73025 4.64254,-2.77556l0.26301,-1.04507c0.16139,-0.64358 0.81593,-1.03411 1.45852,-0.87272l4.35064,1.09488c0.98928,0.24906 1.59201,1.25727 1.34295,2.24655c-0.24906,0.98928 -1.25628,1.59102 -2.24655,1.34295l-0.41843,-0.1056c-0.64358,-0.16239 -1.29712,0.22814 -1.45852,0.87172c-0.16239,0.64458 0.22814,1.29712 0.87172,1.45951l0.41942,0.10461c2.27445,0.57285 4.59074,-0.81195 5.16358,-3.08639c0.57185,-2.27544 -0.81294,-4.59173 -3.08739,-5.16458l-4.35064,-1.09488c-1.92775,-0.48518 -3.89137,0.68841 -4.37654,2.61716l-0.26301,1.04607c-0.19128,0.75915 -0.96537,1.22141 -1.72452,1.03013l-2.21069,-0.55591c-0.98928,-0.24906 -1.59102,-1.25727 -1.34195,-2.24655c0.24906,-0.98928 1.25628,-1.59201 2.24556,-1.34295l0.41843,0.1056c0.64458,0.16239 1.29712,-0.22814 1.45951,-0.87172c0.16139,-0.64458 -0.22914,-1.29712 -0.87272,-1.45951l-0.41843,-0.1052c-2.27445,-0.57245 -4.59074,0.81254 -5.16358,3.08699zM180.94361,256.80108l0.49255,1.95764c0.22645,0.89962 -0.32149,1.81617 -1.22111,2.04232l-2.11814,0.533c-0.89972,0.22615 -1.81617,-0.32179 -2.04262,-1.22141l-0.49255,-1.95664zM168.45507,263.76091c-0.89962,0.22615 -1.81587,-0.32179 -2.04232,-1.22141l-0.49255,-1.95664l7.31041,-1.84008l0.49245,1.95664c0.22645,0.89962 -0.32139,1.81617 -1.22111,2.04232zM380.06898,280.34953l-1.27919,2.95489c-0.26401,0.60871 -0.97135,0.88866 -1.58106,0.62565l-16.42225,-7.11026c-0.60971,-0.26401 -0.88965,-0.97135 -0.62565,-1.58106l1.27919,-2.95489c0.89563,-2.06723 3.30557,-3.02164 5.37379,-2.12601l11.12816,4.81788c2.06822,0.89464 3.02164,3.30557 2.127,5.37379zM168.78582,277.70348c0.26371,0.60971 0.97125,0.88965 1.58056,0.62565l8.02104,-3.47195l1.4635,3.38129l-8.02104,3.47195c-0.60931,0.26401 -0.88936,0.97135 -0.62565,1.58006c0.26381,0.60971 0.97135,0.88965 1.58056,0.62565l13.62965,-5.89982c2.14859,-0.9295 3.14,-3.43409 2.21007,-5.58301c-0.93012,-2.14892 -3.43486,-3.14019 -5.58349,-2.20969l-13.62965,5.89982c-0.60921,0.26301 -0.88926,0.97035 -0.62555,1.58006zM363.64574,273.23927l-0.80099,1.85204l14.21654,6.15486l0.80099,-1.85204c0.36861,-0.8518 -0.02391,-1.84407 -0.87471,-2.21268l-11.12915,-4.81788c-0.8508,-0.36861 -1.84407,0.02391 -2.21268,0.87571zM186.41839,273.38871c0.40342,0.9315 -0.02667,2.01841 -0.95888,2.42189l-3.40249,1.47246l-1.4635,-3.38129l3.40241,-1.47246c0.93229,-0.40348 2.01886,0.0269 2.42246,0.95939zM179.08151,295.19671l14.04295,-9.02706l-1.00057,-1.55615c-0.35899,-0.5589 -0.19733,-1.3021 0.36113,-1.66175c0.55847,-0.35865 1.30203,-0.19726 1.66102,0.36164l3.30101,5.13469c0.359,0.5589 0.19734,1.3021 -0.36112,1.66175c-0.55847,0.35865 -1.30203,0.19726 -1.66103,-0.36164l-1.00056,-1.55615l-14.04292,9.02706c-0.5584,0.35865 -1.302,0.19726 -1.66105,-0.36164c-0.35895,-0.5579 -0.19726,-1.3021 0.36114,-1.66076zM354.2949,285.73827l-1.74046,2.70782c-0.35865,0.5589 -0.19726,1.3021 0.36064,1.66175l15.05439,9.67662c0.5579,0.35865 1.3021,0.19726 1.66076,-0.36164c0.35865,-0.5579 0.19726,-1.30111 -0.36064,-1.66076l-7.35235,-4.72623l1.0909,-1.69662c0.50112,-0.78106 1.54519,-1.00721 2.32526,-0.5061l5.93668,3.81665c0.5589,0.35865 1.3021,0.19726 1.66076,-0.36164c0.35965,-0.5579 0.19726,-1.3021 -0.36064,-1.66076l-5.93668,-3.81665c-0.91356,-0.58679 -1.97458,-0.75915 -2.96585,-0.57185c-0.20722,-0.9574 -0.78007,-1.8351 -1.66673,-2.40595l-2.05826,-1.32303c-1.89587,-1.21842 -4.42935,-0.66749 -5.64776,1.22838zM355.22639,288.735l1.0909,-1.69662c0.50211,-0.78106 1.54519,-1.00721 2.32526,-0.5061l2.05826,1.32303c0.65852,0.42341 0.8508,1.3041 0.4264,1.96262c-0.01594,0.0259 -0.0259,0.0528 -0.03985,0.0787c-0.03288,0.04782 -0.06974,0.09265 -0.10162,0.14246l-1.0909,1.69662zM202.45864,298.70551l-12.4007,11.17598c-0.49316,0.44533 -0.53262,1.20447 -0.08814,1.69762c0.44447,0.49315 1.20438,0.533 1.69754,0.08867l12.4007,-11.17697l1.23876,1.37483c0.44453,0.49315 1.20447,0.533 1.69762,0.08767c0.49315,-0.44433 0.5326,-1.20347 0.08807,-1.69762l-4.08696,-4.53395c-0.44448,-0.49315 -1.20439,-0.533 -1.69755,-0.08867c-0.49316,0.44433 -0.53261,1.20447 -0.08814,1.69762zM357.89934,312.14797c0.49315,0.44433 0.533,1.20447 0.08867,1.69762c-0.44433,0.49315 -1.20447,0.533 -1.69762,0.08767l-11.03152,-9.94361c-1.73946,-1.56711 -1.87894,-4.25799 -0.31083,-5.99645c1.56711,-1.73946 4.25799,-1.87894 5.99645,-0.31083l11.03152,9.94361c0.49315,0.44433 0.533,1.20447 0.08767,1.69762c-0.44433,0.49315 -1.20447,0.532 -1.69662,0.08767l-6.49259,-5.852l-2.46672,2.73671zM349.33554,299.46765c-0.75516,-0.68044 -1.92177,-0.61967 -2.60222,0.13449c-0.67945,0.75516 -0.61967,1.92177 0.13549,2.60222l2.75365,2.48266l2.46672,-2.73671zM205.82276,326.20013l-4.76349,-3.81765c-0.51805,-0.41444 -0.6014,-1.17159 -0.1862,-1.68965l11.19192,-13.9635c0.41524,-0.51805 1.17159,-0.60174 1.68965,-0.1863c0.51805,0.41444 0.60134,1.17159 0.1862,1.68965l-10.44027,13.02602l3.82565,3.06647c0.51795,0.41444 0.60134,1.17159 0.1862,1.68965c-0.41524,0.51805 -1.17159,0.60074 -1.68965,0.1853zM346.56098,324.29031c1.83012,-1.46748 2.12601,-4.1494 0.65952,-5.98051l-0.26899,-0.33474c-0.41544,-0.51805 -1.17159,-0.60074 -1.68965,-0.1863c-0.51805,0.41544 -0.60074,1.17159 -0.1863,1.68965l0.26899,0.33474c0.6376,0.797 0.50909,1.96362 -0.28692,2.60122c-0.79601,0.6376 -1.96262,0.51008 -2.60122,-0.28592l-7.37427,-9.2014c-0.6376,-0.79601 -0.50909,-1.96262 0.28692,-2.60122c0.79601,-0.6376 1.96262,-0.50909 2.60122,0.28692l0.26998,0.33673c0.41444,0.51805 1.17159,0.60074 1.68965,0.1863c0.51805,-0.41544 0.60074,-1.17159 0.1853,-1.68965l-0.26998,-0.33673c-1.46649,-1.83111 -4.1494,-2.12601 -5.97952,-0.65952c-1.83012,1.46748 -2.12601,4.15039 -0.65952,5.98051l7.37427,9.2014c1.46748,1.83012 4.15039,2.12501 5.98051,0.65852zM216.12443,333.16992l5.31591,3.00171c0.57813,0.32677 1.31127,0.12254 1.63764,-0.45628c0.32637,-0.57783 0.12234,-1.31107 -0.45579,-1.63685l-4.26925,-2.41093l3.70606,-6.56432l2.9245,1.65179c0.57813,0.32578 1.31127,0.12154 1.63764,-0.45628c0.32637,-0.57783 0.12234,-1.31107 -0.45579,-1.63784l-2.9245,-1.65079l2.72834,-4.83283l4.26925,2.41093c0.57813,0.32578 1.31127,0.12154 1.63764,-0.45628c0.32637,-0.57783 0.12234,-1.31107 -0.45579,-1.63784l-5.31591,-3.00072c-0.57813,-0.32677 -1.31117,-0.12254 -1.63754,0.45529l-8.79812,15.5844c-0.32647,0.57783 -0.12244,1.31107 0.45569,1.63685zM322.14279,339.3198l-5.62784,2.3661c-0.6117,0.25803 -1.31605,-0.02989 -1.57408,-0.64159l-6.93692,-16.49697c-0.25703,-0.6117 0.02989,-1.31605 0.64159,-1.57309l5.62784,-2.3671c0.6117,-0.25703 1.31605,0.02989 1.57408,0.64258c0.25703,0.6117 -0.03088,1.31605 -0.64258,1.57408l-4.51901,1.89986l2.15091,5.11576l3.09636,-1.3021c0.6117,-0.25703 1.31605,0.03088 1.57408,0.64258c0.25703,0.6117 -0.03088,1.31605 -0.64258,1.57408l-3.09536,1.30111l2.92201,6.94887l4.51901,-1.89986c0.6117,-0.25803 1.31705,0.02989 1.57408,0.64159c0.25703,0.6117 -0.02989,1.31705 -0.64159,1.57408zM305.38281,344.15861l-3.23085,-14.89599c-0.45031,-2.07719 -2.50658,-3.40121 -4.58476,-2.94991c-1.00721,0.21818 -1.8351,0.81593 -2.37108,1.60895c-0.81743,-0.49912 -1.81856,-0.70037 -2.82617,-0.48219c-2.07759,0.45031 -3.40091,2.50757 -2.95031,4.58476l3.23105,14.89599c0.14067,0.64956 0.78057,1.06101 1.42943,0.92054c0.64876,-0.14147 1.06021,-0.78106 0.91974,-1.42962l-3.23095,-14.89599c-0.16966,-0.78206 0.32876,-1.55715 1.11062,-1.72651c0.78236,-0.16936 1.55675,0.32876 1.72641,1.11082l3.23125,14.89599c0.14047,0.64856 0.78007,1.06101 1.42962,0.92054c0.001,-0.001 0.00299,-0.00199 0.00498,-0.00199c0.00199,-0.001 0.00299,0 0.00498,-0.001c0.64856,-0.14047 1.06101,-0.78007 0.92054,-1.42962l-3.23185,-14.89599c-0.16936,-0.78206 0.32876,-1.55615 1.11182,-1.72551c0.78106,-0.16936 1.55615,0.32876 1.72551,1.11082l3.23085,14.89599c0.14047,0.64856 0.78106,1.06001 1.42962,0.91954c0.64856,-0.14047 1.06101,-0.78007 0.91954,-1.42962zM246.76432,344.67566c-0.15492,0.64557 -0.80358,1.04407 -1.44915,0.88866c-0.64557,-0.15442 -1.04328,-0.80298 -0.88846,-1.44855l3.46497,-14.44269c0.54615,-2.27644 2.84281,-3.68415 5.11975,-3.1382c2.27634,0.54694 3.68425,2.84331 3.138,5.11975l-3.46487,14.4417c-0.15492,0.64557 -0.80368,1.04308 -1.44925,0.88866c-0.64557,-0.15542 -1.04328,-0.80398 -0.88836,-1.44955l2.03913,-8.49904l-3.58263,-0.85977zM253.81182,331.09373c0.23701,-0.98729 -0.37369,-1.98354 -1.36128,-2.22065c-0.98799,-0.23711 -1.98434,0.3736 -2.22125,1.36088l-0.86505,3.60544l3.58263,0.85977zM269.60982,333.25361l-1.08412,14.80433c-0.04852,0.66151 0.44881,1.23735 1.11092,1.28616c0.66211,0.04882 1.23804,-0.44831 1.28656,-1.11082l1.08412,-14.80433c0.17136,-2.3392 -1.59281,-4.38153 -3.93221,-4.55288c-2.3394,-0.17136 -4.38182,1.59201 -4.55318,3.93122l-1.08412,14.80433c-0.04842,0.66251 0.44891,1.23834 1.11102,1.28716c0.66211,0.04782 1.23804,-0.44931 1.28646,-1.11182l1.08422,-14.80334c0.07452,-1.01817 0.96298,-1.78529 1.98045,-1.71057c1.01757,0.07472 1.78439,0.96338 1.70987,1.98055zM282.90483,348.03802c0.03895,0.66251 -0.46665,1.23137 -1.12935,1.27022c-0.66271,0.03885 -1.23147,-0.46625 -1.27042,-1.12876l-1.05075,-17.86582c-0.03895,-0.66251 0.46655,-1.23137 1.12935,-1.27022c0.66271,-0.03885 1.23147,0.46724 1.27042,1.12975z"
              data-paper-data='{"isBaseLogoContainer":true}'
              id="element-id-84127"
            ></path>
          </g>
        </g>
      </g>
      <rect
        data-element-id="element-id-7890"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box grouping-element"
        x="146"
        y="106"
        width="258"
        height="258"
        data-element-name="isContainerElementsWrapper"
      ></rect>
      <rect
        data-element-id="element-id-84127"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="146"
        y="106"
        width="258"
        height="258"
      ></rect>
      <rect
        data-element-id="element-id-43756"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box grouping-element"
        x="199"
        y="159"
        width="151"
        height="151"
        data-element-name="isIcon"
      ></rect>
      <rect
        data-element-id="element-id-34971"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="199"
        y="159"
        width="151"
        height="151"
      ></rect>
      <rect
        data-element-id="element-id-89917"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box grouping-element"
        x="163"
        y="121"
        width="223"
        height="95"
        data-element-name="isPrimaryText"
      ></rect>
      <rect
        data-element-id="element-id-2018"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="216"
        y="134"
        width="17"
        height="21"
      ></rect>
      <rect
        data-element-id="element-id-52905"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="289"
        y="123"
        width="16"
        height="22"
      ></rect>
      <rect
        data-element-id="element-id-13470"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="343"
        y="157"
        width="19"
        height="18"
      ></rect>
      <rect
        data-element-id="element-id-67946"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="352"
        y="170"
        width="20"
        height="17"
      ></rect>
      <rect
        data-element-id="element-id-15793"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="308"
        y="128"
        width="15"
        height="21"
      ></rect>
      <rect
        data-element-id="element-id-81037"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="188"
        y="156"
        width="18"
        height="17"
      ></rect>
      <rect
        data-element-id="element-id-86627"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="201"
        y="147"
        width="18"
        height="16"
      ></rect>
      <rect
        data-element-id="element-id-27790"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="332"
        y="145"
        width="16"
        height="18"
      ></rect>
      <rect
        data-element-id="element-id-75223"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="177"
        y="170"
        width="19"
        height="15"
      ></rect>
      <rect
        data-element-id="element-id-21006"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="170"
        y="187"
        width="20"
        height="14"
      ></rect>
      <rect
        data-element-id="element-id-37962"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="360"
        y="186"
        width="20"
        height="14"
      ></rect>
      <rect
        data-element-id="element-id-91309"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="163"
        y="204"
        width="21"
        height="12"
      ></rect>
      <rect
        data-element-id="element-id-90257"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="245"
        y="124"
        width="12"
        height="21"
      ></rect>
      <rect
        data-element-id="element-id-26161"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="366"
        y="204"
        width="20"
        height="11"
      ></rect>
      <rect
        data-element-id="element-id-85458"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="263"
        y="121"
        width="10"
        height="20"
      ></rect>
      <rect
        data-element-id="element-id-21162"
        strokeWidth="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="279"
        y="121"
        width="3"
        height="20"
      ></rect>
    </svg>
  );
};