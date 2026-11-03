# SupportDoc

The pages behind `support.shohay.health`. `index.html` is the support page the apps open: one
WhatsApp button whose chat starts with a message saying who is asking and what about.

## What the support page reads from its link

| Parameter | Sent by | Meaning |
|---|---|---|
| `user_id` | every app link | Who is asking: their email, else phone, else account id. |
| `order` | a purchase receipt's help link | The purchase's order number, e.g. `SB-7K2Q9M`. Its presence switches to the purchase message below. |
| `item` | a purchase receipt | What was bought, e.g. `প্রিমিয়াম (অ্যাপের সবকিছু)`. |
| `amount` | a purchase receipt | What was paid, e.g. `৫৯৯ টাকা`. |
| `status` | a purchase receipt | `পেমেন্ট সম্পন্ন`, `পেমেন্ট সম্পন্ন হয়নি`, `পেমেন্ট হয়নি`, `টাকা ফেরত দেওয়া হয়েছে` or `বাতিল করা হয়েছে`. |
| `date` | a purchase receipt | When it was paid, e.g. `২০ অক্টোবর, ২০২৬, রাত ৯:১৪`. |
| `method` | a purchase receipt | Gateway and masked account, e.g. `বিকাশ ০১৭XX-XXX৪৫৬`. |
| `trx` | a purchase receipt | The gateway's transaction id, e.g. `BHK7Q2M9XZ`. |

Every parameter is optional; a line with no value is left out of the message.

## The purchase help message

From a receipt, the baby app (`ShohayPregnancy-Android`, `PurchaseReceipt.supportMessage`)
opens WhatsApp **directly** with this message already typed, so the mother never sees this
page. The page builds the same message only when WhatsApp isn't installed:

```
হ্যালো সহায় টিম,

আমার একটি কেনাকাটা নিয়ে সাহায্য দরকার।

ইউজার আইডি: mother@example.com
অর্ডার নম্বর: SB-7K2Q9M
যা কিনেছি: প্রিমিয়াম (অ্যাপের সবকিছু)
টাকা: ৫৯৯ টাকা
অবস্থা: পেমেন্ট সম্পন্ন
তারিখ: ২০ অক্টোবর, ২০২৬, রাত ৯:১৪
পেমেন্ট মেথড: বিকাশ ০১৭XX-XXX৪৫৬
ট্রানজেকশন আইডি: BHK7Q2M9XZ

সমস্যা:
```

For the support team: the order number finds the purchase in the admin panel; the
transaction id is what bKash asks for when a payment went through on their side but not ours.

## The WhatsApp number lives in two places

`index.html` (`whatsapp_link`) and the Android app (`SupportLink.SUPPORT_WHATSAPP`, used for
the direct chat). Change both together.
