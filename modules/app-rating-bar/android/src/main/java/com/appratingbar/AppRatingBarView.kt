package com.appratingbar

import android.content.Context
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatRatingBar
import androidx.core.graphics.toColorInt

class AppRatingBarView : AppCompatRatingBar {
  constructor(context: Context) : super(context) {
    prepareComponent()
  }

  constructor(context: Context, attrs: AttributeSet?) : super(context, attrs) {
    prepareComponent()
  }

  constructor(context: Context, attrs: AttributeSet?, defStyleAttr: Int) : super(
    context,
    attrs,
    defStyleAttr
  ) {
    prepareComponent()
  }

  private fun prepareComponent() {
    stepSize = 0.5f
    progressTintList = android.content.res.ColorStateList.valueOf("#FFD700".toColorInt())
    secondaryProgressTintList = android.content.res.ColorStateList.valueOf("#FFE082".toColorInt())
    progressBackgroundTintList = android.content.res.ColorStateList.valueOf("#DDDDDD".toColorInt())
  }
}
