package io.kotest.property.arbitrary

import io.kotest.property.Arb

/**
 * Create a new [Arb] by keeping only instances of B generated by this gen.
 * This is useful if you have a type hierarchy and only want to retain
 * a particular subtype.
 */
@Suppress("UNCHECKED_CAST")
inline fun <A, reified B : A> Arb<A>.filterIsInstance(): Arb<B> = filter { it is B }.map { it as B }
