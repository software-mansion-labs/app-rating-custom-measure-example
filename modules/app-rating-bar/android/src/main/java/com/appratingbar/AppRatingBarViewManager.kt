package com.appratingbar

import android.content.Context
import android.util.Log
import android.view.View
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.PixelUtil
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.AppRatingBarViewManagerInterface
import com.facebook.react.viewmanagers.AppRatingBarViewManagerDelegate
import com.facebook.yoga.YogaMeasureMode
import com.facebook.yoga.YogaMeasureOutput

@ReactModule(name = AppRatingBarViewManager.NAME)
class AppRatingBarViewManager : SimpleViewManager<AppRatingBarView>(),
  AppRatingBarViewManagerInterface<AppRatingBarView> {
  private val mDelegate: ViewManagerDelegate<AppRatingBarView>

  init {
    mDelegate = AppRatingBarViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<AppRatingBarView>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): AppRatingBarView {
    return AppRatingBarView(context)
  }

  @ReactProp(name = "numStars")
  override fun setNumStars(view: AppRatingBarView?, num: Int) {
    view?.numStars = num
  }

  override fun measure(
    context: Context,
    localData: ReadableMap?,
    props: ReadableMap?,
    state: ReadableMap?,
    width: Float,
    widthMode: YogaMeasureMode?,
    height: Float,
    heightMode: YogaMeasureMode?,
    attachmentsPositions: FloatArray?
  ): Long {
    val numStars = props?.getInt("numStars") ?: 0
    if (numStars == 0) {
      return YogaMeasureOutput.make(0, 0)
    }
    val view = AppRatingBarView(context).apply { this.numStars = numStars }
    val measureSpec = View.MeasureSpec.makeMeasureSpec(0, View.MeasureSpec.UNSPECIFIED)
    view.measure(measureSpec, measureSpec)

    return YogaMeasureOutput.make(
      PixelUtil.toDIPFromPixel(view.measuredWidth.toFloat()),
      PixelUtil.toDIPFromPixel(view.measuredHeight.toFloat())
    )
  }

  companion object {
    const val NAME = "AppRatingBarView"
  }
}
