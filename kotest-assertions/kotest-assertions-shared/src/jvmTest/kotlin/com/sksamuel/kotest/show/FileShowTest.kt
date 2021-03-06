package com.sksamuel.kotest.show

import io.kotest.assertions.show.show
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import java.io.File

private val sep = File.separator

class FileShowTest : FunSpec({
  test("Show should support File") {
    File("/a/b/c").show().value shouldBe "${sep}a${sep}b${sep}c"
  }
})
