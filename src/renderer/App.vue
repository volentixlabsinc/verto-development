<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'verto'
  }
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

@font-face {
  font-family: "Calibri";
  src: url("~@/assets/fonts/Calibri.ttf");
}

@font-face {
  font-family: "Calibri-bold";
  src: url("~@/assets/fonts/CALIBRIB.ttf");
}

@font-face {
  font-family: "Calibri-italic";
  src: url("~@/assets/fonts/CALIBRII.ttf");
}

@font-face {
  font-family: "Gibson";
  src: url("~@/assets/fonts/Gibson-Regular.ttf");
}

@font-face {
  font-family: "Gibson-italic";
  src: url("~@/assets/fonts/Gibson-RegularItalic.ttf");
}

@font-face {
  font-family: "Gibson-semibold";
  src: url("~@/assets/fonts/Gibson-SemiBold.otf");
}

@font-face {
  font-family: "Gibson-bold";
  src: url("~@/assets/fonts/Gibson-bold.ttf");
}

@font-face {
  font-family: "Gibson-bolditalic";
  src: url("~@/assets/fonts/Gibson-BoldItalic.ttf");
}

$light-green: rgba(55, 202, 189, 0.3);
$dark-green: #152223;
$dark-light-green: #1A4A48;
$white: #f4f4f2;

body,
html {
  overflow: hidden !important;
  font-family: 'Calibri' !important;
}

.font-gibson {
  font-family: "Gibson";
}

.font-gibson-semibold {
  font-family: "Gibson-semibold";
}

.font-gibson-italic {
  font-family: "Gibson-italic";
}

.font-gibson-bold {
  font-family: "Gibson-bold";
}

.font-gibson-bolditalic {
  font-family: "Gibson-bolditalic";
}

.font-calibri {
  font-family: "Calibri";
}

.font-calibri-bold {
  font-family: "Calibri-bold";
}

.font-calibri-italic {
  font-family: "Calibri-italic";
}

.has-background-darkgreen {
  background-color: $dark-green;
}

.has-text-darkgreen {
  color: $dark-green;
}

.has-background-lightgreen {
  background-color: $light-green;
}

.has-text-darkgreen {
  color: $dark-green;
}

.has-text-lightgreen {
  color: $light-green;
}
.has-text-white {
  color: $white;
}

.has-text-darklightgreen {
  color: $dark-light-green;
}

.has-background-darklightgreen {
  background-color: $dark-light-green;
}

$sizeUnit: rem;
$marginKey: 'm';
$paddingKey: 'p';
$separator: '-';
$sizes: (('none', 0),
('xxs', 0.125),
('xs', 0.25),
('sm', 0.5),
('md', 1),
('lg', 2),
('xl', 4),
('xxl', 8),
);
$positions: (('t', 'top'),
('r', 'right'),
('b', 'bottom'),
('l', 'left'));

@function sizeValue($key, $value) {
  @return if($key=='none', 0, $value + $sizeUnit);
}

@each $size in $sizes {
  $sizeKey: nth($size, 1);
  $sizeValue: nth($size, 2);

  .#{$marginKey}#{$separator}#{$sizeKey} {
    margin: sizeValue($sizeKey, $sizeValue);
  }

  .#{$paddingKey}#{$separator}#{$sizeKey} {
    padding: sizeValue($sizeKey, $sizeValue);
  }

  @each $position in $positions {
    $posKey: nth($position, 1);
    $posValue: nth($position, 2);

    .#{$marginKey}#{$separator}#{$posKey}#{$separator}#{$sizeKey} {
      margin-#{$posValue}: sizeValue($sizeKey, $sizeValue);
    }

    .#{$paddingKey}#{$separator}#{$posKey}#{$separator}#{$sizeKey} {
      padding-#{$posValue}: sizeValue($sizeKey, $sizeValue);
    }
  }
}
</style>
